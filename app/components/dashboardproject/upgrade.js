/**
 * Created by Darkstar on 12/5/2016.
 */
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Row, Col, Clearfix, NavDropdown, MenuItem} from 'react-bootstrap';
import Check from 'material-ui/svg-icons/navigation/check';
import {FormControl, InputGroup, FormGroup, ControlLabel} from 'react-bootstrap';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import {grey500} from 'material-ui/styles/colors';
import planList from '../../fakeAPI/plans';
class Upgrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: planList.plans[0]
        };
    }

    render() {

        const {handleSubmit} = this.props;

        const handleSelect = (eventKey) => this.setState({plan: planList.plans[eventKey - 1]});
        console.log(planList);
        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={12}>
                                <div>100% money back guarantee for the first 30 days on paid plans.</div>
                            </Col>
                        </Row>
                        <Row id="expiry">
                            <Col md={6}>
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Expiry Month</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                        <option value="4">04</option>
                                        <option value="5">05</option>
                                        <option value="6">06</option>
                                        <option value="7">07</option>
                                        <option value="8">08</option>
                                        <option value="9">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup controlId="formControlsSelect">
                                    <ControlLabel>Expiry Year</ControlLabel>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                        <option value="2032">2032</option>
                                        <option value="2033">2033</option>
                                        <option value="2034">2034</option>
                                        <option value="2035">2035</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <InputGroup id="CVV">
                            <InputGroup.Addon>CVV</InputGroup.Addon>
                            <FormControl type="text" placeholder="123"/>
                        </InputGroup>
                    </Col>
                    <Col md={6} id="panel-pricing">
                        <div className="panel panel-success panel-pricing">
                            <div className="panel-heading">
                                <h1>
                                    <NavDropdown title={this.state.plan.name} id="planName" onSelect={handleSelect}>
                                        <MenuItem eventKey={1}>{planList.plans[0].name}</MenuItem>
                                        <MenuItem eventKey={2}>{planList.plans[1].name}</MenuItem>
                                        <MenuItem eventKey={3}>{planList.plans[2].name}</MenuItem>
                                        <MenuItem eventKey={4}>{planList.plans[3].name}</MenuItem>
                                        <MenuItem eventKey={5}>{planList.plans[4].name}</MenuItem>
                                    </NavDropdown>
                                </h1>
                            </div>
                            <div className="panel-body text-center">
                                <p><strong>${this.state.plan.cost} / Month</strong></p>
                            </div>
                            <ul className="list-group text-center">
                                <li className="list-group-item">DB(API Calls/Storage):
                                    <strong> {this.state.plan.apiCalls}/{this.state.plan.storage}{this.state.plan.storageUnit}</strong>
                                </li>
                                <li className="list-group-item">Connections:
                                    <strong> {this.state.plan.connections}</strong></li>
                                <li className="list-group-item">Mongo DB:
                                    <strong> {this.state.plan.mongoDbAccess ? <Check /> : " -"}</strong></li>
                            </ul>
                            <div className="panel-footer">
                                <a className="btn btn-lg btn-block btn-success" type="submit">BUY NOW!</a>
                                <Clearfix />
                            </div>
                        </div>
                    </Col>
                </Row>

                <InputGroup>
                    <InputGroup.Addon><CreditCard color={grey500}/></InputGroup.Addon>
                    <FormControl type="text" placeholder="1234 5678 9012 3456"/>
                </InputGroup>
                <InputGroup>
                    <InputGroup.Addon><strong>Name on card</strong></InputGroup.Addon>
                    <FormControl type="text" placeholder="Firstname Lastname"/>
                </InputGroup>
            </form>
        );
    }
}

export default reduxForm({
    form: 'upgrade' // a unique name for this form
})(Upgrade);
