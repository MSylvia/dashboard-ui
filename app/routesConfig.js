/**
 * Created by Darkstar on 11/30/2016.
 */
'use strict';
import App from './components/app';
import TablesPage from './components/manageapps/tables/tablesPage';
import Manager from './components/manageapps/manager';

const routesConfig = [
    {path: '/', component: App},
    {path: '/tables', component: TablesPage},
    {path: '/appmanager', component: Manager}
];
export default routesConfig;
