'use strict';

import React from 'react';

const Projectname = React.createClass({
    getInitialState: function() {
        return {
            display: {display: 'none'},
            src: '/images/editpen.svg',
            value: 'your app name'
        }
    },
    editname: function() {
        if(this.state.display.display === 'none') {
          this.setState({
              display: {display: 'block'},
              src: '/images/closebtn.svg'
          });  
      } else{
        this.setState({
            display: {display: 'none'},
            src: '/images/editpen.svg',
            value: this.refs.input.value
        });
      }   
    },
    render: function() {
        return (
            <div className="relative-pos">
                <p>{this.state.value} <img className="editpen" onClick={this.editname} src={this.state.src}/></p>
                <input ref="input" defaultValue={this.state.value} style={this.state.display}/>
            </div>
        );
    }
});

export default Projectname;
