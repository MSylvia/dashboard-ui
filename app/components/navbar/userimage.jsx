'use strict';

import React from 'react';
import Usermenu from './usermenu.jsx';

const Userimage = React.createClass({
    render: function() {
        return (
            <div>
                <img src="https://www.gravatar.com/avatar/7ea446f8837a4b200678c87c557135ca?s=64&d=identicon" alt=""/>
                <Usermenu />
            </div>
        );
    }
});

export default Userimage;