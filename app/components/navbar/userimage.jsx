'use strict';

import React from 'react';


const Userimage = React.createClass({
    render: function() {
        return (
            <img className="userhead" src="https://www.gravatar.com/avatar/7ea446f8837a4b200678c87c557135ca?s=64&d=identicon" alt=""/>
        );
    }
});

export default Userimage;