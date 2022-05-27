const passport = require('passport');
const SteamStrategy = require('../../../').Strategy;
const path = require('path');
const config = require(path.resolve(__dirname,'../../../', 'server.config'));


module.exports.init = (app) => {

    // Passport session setup.
    //   To support persistent login sessions, Passport needs to be able to
    //   serialize users into and deserialize users out of the session.  Typically,
    //   this will be as simple as storing the user ID when serializing, and finding
    //   the user by ID when deserializing.  However, since this example does not
    //   have a database of user records, the complete Steam profile is serialized
    //   and deserialized.
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(obj, done) {
        done(null, obj);
      });
      
      // Use the SteamStrategy within Passport.
      //   Strategies in passport require a `validate` function, which accept
      //   credentials (in this case, an OpenID identifier and profile), and invoke a
      //   callback with a user object.
      passport.use(new SteamStrategy({
      
        
          returnURL: `http://${config.PUREDOMAIN}:${config.SERVER_HTTP_PORT}/auth/steam/return`,
          realm: `http://${config.PUREDOMAIN}:${config.SERVER_HTTP_PORT}/auth/steam/return`,
          apiKey: ''
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
      ));

      return passport;

}

