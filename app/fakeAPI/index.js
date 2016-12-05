const fakeDatabase = {
    apps: [
        {
            '_id': '583f0173f753921f34694ab5',
            'appId': 'wuprqidqjjsr',
            'keys': {
                'master': '689ba027-16fb-4678-b34c-e8e50ff323ba',
                'js': '888674e0-d81a-4765-b030-057d394d69d3'
            },
            'disabled': false,
            'planId': 1,
            'name': 'testtws',
            '_userId': '583d0133819e6e1adc531038',
            'developers': [
                {
                    'userId': '583d0133819e6e1adc531038',
                    'role': 'Admin'
                }
            ],
            'invited': []
        },
        {
            '_id': '58407569eba3b0061ca23151',
            'appId': 'apncinjrgdhz',
            'keys': {
                'master': 'af22318b-e9bf-41a3-9198-762d33a18221',
                'js': 'a6586c1f-5f9a-4857-a614-f4fa4bcf0145'
            },
            'disabled': false,
            'planId': 1,
            'name': 'app2',
            '_userId': '583d0133819e6e1adc531038',
            'developers': [
                {
                    'userId': '583d0133819e6e1adc531038',
                    'role': 'Admin'
                }
            ],
            'invited': []
        },
        {
            '_id': '58407600eba3b0061ca23152',
            'appId': 'zxynxmvpktcu',
            'keys': {
                'master': '40ba836e-0833-471a-85e3-cca12fe20a08',
                'js': 'cde40adb-32d1-4c5e-88e0-f7ffe61d2f67'
            },
            'disabled': false,
            'planId': 1,
            'name': 'Hakuna Matata',
            '_userId': '583d0133819e6e1adc531038',
            'developers': [
                {
                    'userId': '583d0133819e6e1adc531038',
                    'role': 'Admin'
                }
            ],
            'invited': []
        },
        {
            '_id': '58407618eba3b0061ca23153',
            'appId': 'jrlzavifzmqt',
            'keys': {
                'master': '3e58da7d-c61f-4889-9d9b-71f99e0e8c82',
                'js': 'bea8c5d0-358a-4477-be16-99a403c0959a'
            },
            'disabled': false,
            'planId': 1,
            'name': 'Fish Pond',
            '_userId': '583d0133819e6e1adc531038',
            '__v': 1,
            'developers': [
                {
                    'userId': '583d0133819e6e1adc531038',
                    'role': 'Admin'
                }
            ],
            'invited': [
                {
                    'notificationId': '58407670274940137809167e',
                    'email': 'jrcignesh@yahoo.com'
                }
            ]
        }
    ]
};

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchApps = (filter) =>
    delay(500).then(() => {
        return fakeDatabase.apps;
    });
