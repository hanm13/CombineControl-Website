export const config = {
    serverSettings: {
        listenPort: 8080
    },
    dbSettings: {
        url: "",
        dbAccessorImpl: "sequelize"
    },
    sessionSettings: {
        secretKeys: ["NO", "NO", "NO"],
        maxAge: 1000 * 60 * 60 * 24 * 7 // week
    },
    authenticationSettings: {
        steamApiKey: ""
    }
};
