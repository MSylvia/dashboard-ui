/**
 * Created by Darkstar on 11/30/2016.
 */
'use strict';
import App from './components/app';
import TablesPage from './components/manageapps/tables/tablesPage';

const routesConfig = [
    {path: '/', component: App},
    {path: '/tables', component: TablesPage}
];
export default routesConfig;
