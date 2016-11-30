/**
 * Created by Darkstar on 11/30/2016.
 */

import path from 'path';
const http = require('http');
const Express = require('express');
const React = require('react');
const ReactDom = require('react-dom/server');
const Router = require('react-router');
import routesConfig from './app/routesConfig';

const app = new Express();
const server = new http.Server(app);

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// todo: may have different path when redering from client, please check
app.use(Express.static(path.join(__dirname, '.build')));

app.get('*', (req, res) => {
    Router.match(
        {routes: routesConfig, location: req.url},
        (error, redirectLocation, renderProps) => {

            if (error) {
                res.status(500).send(error.message)
            } else if (redirectLocation) {
                res.redirect(302, redirectLocation.pathname +
                    redirectLocation.search)
            } else if (renderProps) {
                const markup = ReactDom.renderToString(<Router.RouterContext
                    {...renderProps} />);
                res.render('index', {markup});
            } else {
                res.status(404).send('Not found')
            }
        }
    );
});
server.listen(process.env.PORT || 1440, (err) => {
    if (err) {
        return console.error(err);
    }
    console.info('Server running on http://localhost:'+ ( process.env.PORT ? process.env.PORT : "1440" ));
});
