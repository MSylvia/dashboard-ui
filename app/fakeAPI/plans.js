/**
 * Created by Darkstar on 12/5/2016.
 */
export default {
    plans: [
        {
            id: 1,
            name: 'Free Plan',
            cost: 0,
            timePeriod: 'Month',
            apiCalls: 10000,
            numApiCalls: 10000,
            storage: 200,
            storageUnit: 'MB',
            numStorage: 200,
            connections: 500,
            mongoDbAccess: false
        }, {
            id: 2,
            name: 'Launch Plan',
            cost: 49,
            timePeriod: 'Month',
            apiCalls: 250000,
            numApiCalls: 250000,
            storage: 5,
            storageUnit: 'GB',
            numStorage: 5120,
            connections: 500,
            mongoDbAccess: true
        }, {
            id: 3,
            name: 'Bootstrap Plan',
            cost: '149',
            timePeriod: 'Month',
            apiCalls: '1 MILLION',
            numApiCalls: 1000000,
            storage: '10',
            storageUnit: 'GB',
            numStorage: 10240,
            connections: 'UNLIMITED',
            mongoDbAccess: true
        }, {
            id: 4,
            name: 'Scale Plan',
            cost: '449',
            timePeriod: 'Month',
            apiCalls: '5 MILLION',
            numApiCalls: 5000000,
            storage: 30,
            storageUnit: 'GB',
            numStorage: 30720,
            connections: 'UNLIMITED',
            mongoDbAccess: true
        }, {
            id: 5,
            name: 'Unicorn Plan',
            cost: 1449,
            timePeriod: 'Month',
            apiCalls: '10 MILLION',
            numApiCalls: 10000000,
            storage: 100,
            storageUnit: 'GB',
            numStorage: 102400,
            connections: 'UNLIMITED',
            mongoDbAccess: true
        }
    ]
};
