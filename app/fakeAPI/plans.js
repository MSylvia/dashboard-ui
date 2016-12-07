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
            storage: 200,
            storageUnit: 'MB',
            connections: 500,
            mongoDbAccess: false
        }, {
            id: 2,
            name: 'Launch Plan',
            cost: 49,
            timePeriod: 'Month',
            apiCalls: 250000,
            storage: 5,
            storageUnit: 'GB',
            connections: 500,
            mongoDbAccess: true
        }, {
            id: 3,
            name: 'Bootstrap Plan',
            cost: '149',
            timePeriod: 'Month',
            apiCalls: '1 MILLION',
            storage: '10',
            storageUnit: 'GB',
            connections: 'UNLIMITED',
            mongoDbAccess: true
        }, {
            id: 4,
            name: 'Scale Plan',
            cost: '449',
            timePeriod: 'Month',
            apiCalls: '5 MILLION',
            storage: 30,
            storageUnit: 'GB',
            connections: 'UNLIMITED',
            mongoDbAccess: true
        }, {
            id: 5,
            name: 'Unicorn Plan',
            cost: 1449,
            timePeriod: 'Month',
            apiCalls: '10 MILLION',
            storage: 100,
            storageUnit: 'GB',
            connections: 'UNLIMITED',
            mongoDbAccess: true
        }
    ]
};
