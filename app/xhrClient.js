/**
 * Created by Darkstar on 11/30/2016.
 */
'use strict';
const Axios = require('axios');
//todo: read API URL from config file
//todo: change this again when doing umiversal rendering
// const baseURL = typeof window !== 'undefined' ? '/api' : 'http://localhost:3000';
const baseURL = 'http://localhost:3000';
const xhrClient = Axios.create({
    baseURL : baseURL,
    withCredentials: true,
});
module.exports = xhrClient;
