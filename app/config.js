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
            cloudBoostAPI: 'http://api.cloudboost.io',
            twoCheckoutCredentials: {
                sellerId: "202796222",
                publishableKey: "EB50E085-0670-49C7-82EE-2C5977488771",
                mode: "production"
            }
        };
    }
    return {
        dashboardAPI: 'http://localhost:3000',
        analyticsAPI: '',
        accountsURL: 'http://localhost:1447',
        accountsAPI: 'http://localhost:3000',
        cloudBoostAPI: 'http://localhost:4730',
        twoCheckoutCredentials: {
            sellerId: "901307760",
            publishableKey: "5DB21AAF-317D-4FCB-A985-DD296ECDF71A",
            mode: "sandbox"
        }
    };
};

module.exports = globals();
