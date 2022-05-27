/**
 * Basic example demonstrating passport-steam usage within Express framework
 */

// Node Modules
const express = require("express");
const passport = require("passport");
const util = require("util");
const session = require("express-session");
const path = require("path");
const cookieSession = require("cookie-session");
const SteamID = require("steamid");
const fs = require("fs");
const bodyParser = require("body-parser");
const chalk = require("chalk");

const STEAMSTRATEGY = require("./").Strategy;
const CONNECTION = require(path.resolve(
  __dirname,
  "bin",
  "microservices",
  "sql",
  "sql.service"
)).connection;
const SERVER_CHAT = require(path.resolve(
  __dirname,
  "bin",
  "microservices",
  "api",
  "server_chat",
  "chat.controller"
));

const SERVER_CONFIG = require(path.resolve(__dirname, "server.config"));

// controllers:

const API_PLAYER_DATA = require(path.resolve(
  __dirname,
  "bin",
  "microservices",
  "api",
  "player_data",
  "player_data.controller"
));

// Determine environments by HOSTNAME, DEV or Production
const ENVIROMENT =
  process.env.HOSTNAME == "s1.combinecontrol.com"
    ? { mode: "production" }
    : { mode: "development" };

// Server Network
const app = express();

app.listen(SERVER_CONFIG.SERVER_HTTP_PORT);

// Use middlewares (app level - not controller level):
// this middleware takes the content of the request`s body, and parses it to json format
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// _________________________________

// configure Express
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(
  cookieSession({
    name: "session",
    keys: SERVER_CONFIG.sessionSettings.secretKeys,

    // Cookie Options
    maxAge: SERVER_CONFIG.sessionSettings.maxAge,
    httpOnly: false,
    domain: SERVER_CONFIG.PUREDOMAIN
  })
);

app.use(express.static(__dirname + "/../../public"));

//_________________________PASSPORT_________________________________________________

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Steam profile is serialized
//   and deserialized.
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Use the STEAMSTRATEGY within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(
  new STEAMSTRATEGY(
    {
      returnURL: `http://${SERVER_CONFIG.PUREDOMAIN}:${
        SERVER_CONFIG.SERVER_HTTP_PORT
      }/auth/steam/return`,
      realm: `http://${SERVER_CONFIG.PUREDOMAIN}:${
        SERVER_CONFIG.SERVER_HTTP_PORT
      }/auth/steam/return`,
      apiKey: ""
    },
    (identifier, profile, done) => {
      // asynchronous verification, for effect...
      process.nextTick(() => {
        // To keep the example simple, the user's Steam profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the Steam account with a user record in your database,
        // and return that user instead.
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());

//_________________________PASSPORT_________________________________________________

//_________________________User Is Connected To Steam MiddleWare_________________________________________________

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
let ensureAuthenticated = (req, res, next) => {
  try {
    res = allowHeaderAccess(res);

    if (req.isAuthenticated()) {
      return next();
    }
  } catch (err) {
    console.log(`ensureAuthenticated failed, info:${err})`);
  }

  res.redirect("/");
};

//_________________________User Is Connected To Steam MiddleWare_________________________________________________

app.get("/", (req, res) => {
  res.status(401).send();
});

//_________________________routes__________________________________________________________________________________

// Player Data

app.get("/api/getplayerdata", ensureAuthenticated, (req, res) => {
  API_PLAYER_DATA.getPlayerData(req, res);
});

// Verify CombineControl Staff Member

app.get("/api/getstaffdata", ensureAuthenticated, (req, res) => {
  API_PLAYER_DATA.getStaffLevel(req, res);
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect(SERVER_CONFIG.CLIENTDOMAIN);
});

// GET /auth/steam
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Steam authentication will involve redirecting
//   the user to steamcommunity.com.  After authenticating, Steam will redirect the
//   user back to this application at /auth/steam/return
app.get(
  "/authenticate",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function(req, res) {
    res.redirect("/");
  }
);

// GET /auth/steam/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
  "/auth/steam/return",
  passport.authenticate("steam", { failureRedirect: "/" }),
  function(req, res) {
    //res.redirect('/');
    res.redirect(SERVER_CONFIG.CLIENTDOMAIN);
  }
);

let allowHeaderAccess = res => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", SERVER_CONFIG.CLIENTDOMAIN);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  return res;
};

//TODO: Move to controller
app.get("/api/chat", ensureAuthenticated, (req, res) => {
  if (!req.user && !req.user._json) {
    res.send("please login to your steam account!").end();
    return;
  }

  let sid = new SteamID(req.user._json.steamid);
  let steamid32 = sid.getSteam2RenderedID();

  //TODO: Move to Model

  CONNECTION.query(
    "SELECT * FROM `cc_serverlogs` WHERE `Name` LIKE 'oocchat' ORDER BY `cc_serverlogs`.`Date` DESC LIMIT 10",
    (err, results, fields) => {
      if (results && results.length > 0) {
        res.send(JSON.stringify(results)).end();
      }
    }
  );
});

let init = () => {
  console.log("Server started on port:", SERVER_CONFIG.SERVER_HTTP_PORT);

  // Production / Development enviorements
  if (ENVIROMENT.mode == "production") {
    console.log(chalk.red("---Production environment---"));
  } else {
    console.log(chalk.red("---Development environment---"));
  }
};

SERVER_CHAT.init(app);

init();
