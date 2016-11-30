/**
 * Created by Darkstar on 11/30/2016.
 */
const Axios = require('axios');
const baseURL = typeof window !== 'undefined' ? '/api' :
    'http://localhost:3001';
const xhrClient = Axios.create({baseURL});
module.exports = xhrClient;
