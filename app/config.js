/**
 * Created by Darkstar on 12/4/2016.
 */
let globals = () => {
    console.log("value of environment variable NODE_ENV");
    console.log(process.env["NODE_ENV"]);
    if (process.env["NODE_ENV"] === "production") {
        return {
            dashboardAPI: 'https://service.cloudboost.io',
            analyticsAPI: '',
            accountsURL: 'https://accounts.cloudboost.io',
            accountsAPI: 'https://service.cloudboost.io',
            cloudBoostAPI: 'http://api.cloudboost.io'
        };
    }
    return {
        dashboardAPI: 'http://localhost:3000',
        analyticsAPI: '',
        accountsURL: 'http://localhost:1447',
        accountsAPI: 'http://localhost:3000',
        cloudBoostAPI: 'http://localhost:4730'
    };
};

module.exports = globals();
