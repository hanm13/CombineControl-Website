

/*


PROD DOMAINS :

  CLIENTDOMAIN = 'http://dev1.combinecontrol.com';
  PUREDOMAIN = 's1.combinecontrol.com';
  

  DEV DOMAINS:

    PUREDOMAIN: 'localhost',
    CLIENTDOMAIN: 'http://localhost:4200',

*/




module.exports = {
    serverSettings: {
        listenPort: 8080
    },
    dbSettings: {
        url: 'NO',
        dbAccessorImpl: 'sequelize'
    },
    sessionSettings: {
        secretKeys: ['NO', 'NO', 'NO'],
        maxAge: 1000 * 60 * 60 * 24 * 7 // week
    },
    authenticationSettings: {
        steamApiKey: ''
    },
    PUREDOMAIN: 'localhost',
    CLIENTDOMAIN: 'http://localhost:4200',
    SERVER_HTTP_PORT: process.env.PORT || 6001,

}