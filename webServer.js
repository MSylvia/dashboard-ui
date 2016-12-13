/**
 * Created by Darkstar on 11/30/2016.
 * This file may be used in future to do server side rendering, right now,
 * it will just stay here in project as there were many complications for server side rendering
 */

import path from 'path';
const http = require('http');
const httpProxy = require('http-proxy');
const Express = require('express');
const React = require('react');
import AsyncProps, { loadPropsOnServer } from 'async-props'
const ReactDom = require('react-dom/server');
const Router = require('react-router');
import routesConfig from './app/routesConfig';

const app = new Express();
const server = new http.Server(app);

const proxy = httpProxy.createProxyServer({
    target: 'http://localhost:3000'
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app','views'));
// todo: may have different path when rendering from client, please check
app.use('/.build',Express.static(path.join(__dirname, '.build')));

app.use('/api', (req, res) => {
    console.log("Hola");
    proxy.web(req, res);
});

app.get('*', (req, res) => {
    Router.match({routes: routesConfig, location: req.url}, (error, redirectLocation, renderProps) => {

            if (error) {
                res.status(500).send(error.message)
            }
            else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname + redirectLocation.search)
            }
            else if (renderProps) {

                loadPropsOnServer(renderProps, {}, (err, asyncProps, scriptTag) => {
                    const markup = ReactDom.renderToString(<AsyncProps {...renderProps} {...asyncProps} />);
                    res.render('index', {markup, scriptTag});
                });
            }
            else {
                res.status(404).send('Not found')
            }
        }
    );
});
server.listen(process.env.PORT || 1440, (err) => {
    if (err) {
        return console.error(err);
    }
    console.info('Server running on http://localhost:' + ( process.env.PORT ? process.env.PORT : "1440" ));
});
