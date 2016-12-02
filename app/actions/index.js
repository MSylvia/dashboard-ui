/**
 * Created by Darkstar on 12/2/2016.
 */

import * as api from '../fakeAPI';

export const fetchApps = (filter) =>
    api.fetchTodos(filter).then(response =>
        receiveTodos(filter, response)
    );
