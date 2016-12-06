/**
 * Created by Darkstar on 12/5/2016.
 */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button,Row,Col,Panel} from 'react-bootstrap';
class Upgrade extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="fullName" component="input" type="text"/>
                </div>
                <div>
                    <Field name="cardNo" component="input" type="text"/>
                </div>
                <div>
                    <Field name="email" component="input" type="email"/>
                </div>
                <Button bsStyle="primary">Purchase Plan</Button>
                <div className="col-md-5 text-center">
                    <div className="panel panel-success panel-pricing">
                        <div className="panel-heading">
                            <h3>Plan 3</h3>
                        </div>
                        <div className="panel-body text-center">
                            <p><strong>$300 / Month</strong></p>
                        </div>
                        <ul className="list-group text-center">
                            <li className="list-group-item"><i className="fa fa-check"></i> Personal use</li>
                            <li className="list-group-item"><i className="fa fa-check"></i> Unlimited projects</li>
                            <li className="list-group-item"><i className="fa fa-check"></i> 27/7 support</li>
                        </ul>
                        <div className="panel-footer">
                            <a className="btn btn-lg btn-block btn-success" href="#">BUY NOW!</a>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

// Decorate the form component
Upgrade = reduxForm({
    form: 'upgrade' // a unique name for this form
})(Upgrade);

export default Upgrade;
