/**
 * Created by Darkstar on 11/30/2016.
 */
"use strict"
const Axios = require('axios');
//todo: read API URL from config file
const baseURL = typeof window !== 'undefined' ? '/api' : 'http://localhost:3000';
const xhrClient = Axios.create({baseURL});
module.exports = xhrClient;
