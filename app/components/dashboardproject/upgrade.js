/**
 * Created by Darkstar on 12/5/2016.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Row, Col, Clearfix, NavDropdown, MenuItem} from 'react-bootstrap';
import Check from 'material-ui/svg-icons/navigation/check';
import {FormControl, InputGroup, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import CreditCard from 'material-ui/svg-icons/action/credit-card';
import {grey500} from 'material-ui/styles/colors';
import planList from '../../fakeAPI/plans';
import {createSale} from '../../actions';

class Upgrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: planList.plans[parseInt(this.props.planId) - 1],
            cardDetails: {},
            upgradeClicked: false
        };
    }

    render() {

        const handleSelect = (eventKey) => this.setState({
            plan: planList.plans[eventKey - 1]
        });

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state);
            this.state.upgradeClicked ? this.props.purchase(this.props.appId, this.state.cardDetails, this.state.plan.id) : this.setState({upgradeClicked: true});
        };

        const handleGoBack = (event) => {
            event.preventDefault();
            this.setState({upgradeClicked: false});
        };

        const handleChange = (e) => {
            switch (e.target.name) {
                case 'year' :
                    this.setState({cardDetails: {...this.state.cardDetails, year: e.target.value}});
                    break;
                case 'month' :
                    this.setState({cardDetails: {...this.state.cardDetails, month: e.target.value}});
                    break;
                case 'cvc' :
                    this.setState({cardDetails: {...this.state.cardDetails, cvc: e.target.value}});
                    break;
                case 'ccno' :
                    this.setState({cardDetails: {...this.state.cardDetails, ccNo: e.target.value}});
                    break;
                case 'addrLine1' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.billing, addrLine1: e.target.value}
                        }
                    });
                    break;
                case 'addrLine2' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.billing, addrLine2: e.target.value}
                        }
                    });
                    break;
                case 'city' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.billing, city: e.target.value}
                        }
                    });
                    break;
                case 'country' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.billing, country: e.target.value}
                        }
                    });
                    break;
                case 'name' :
                    this.setState({billingAddr: {...this.state.billingAddr, name: e.target.value}});
                    break;
                case 'state' :
                    this.setState({billingAddr: {...this.state.billingAddr, state: e.target.value}});
                    break;
                case 'zipCode' :
                    this.setState({billingAddr: {...this.state.billingAddr, zipCode: e.target.value}});
                    break;
            }
        };

        const renderCardDetail = () => <div>

            <div style={{height: 40}}>
                100% money back guarantee for the first 30 days on paid plans.
            </div>
            < Row>
                < Col xs={8}>
                    < FormGroup >
                        < ControlLabel > Card number</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon><CreditCard color={grey500}/></InputGroup.Addon>
                            <FormControl type="text" name="ccno" placeholder="•••• •••• •••• ••••"
                                         onChange={handleChange}/>
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col xs={4}>
                    <FormGroup>
                        <ControlLabel>Security Code</ControlLabel>
                        <FormControl type="text" placeholder="123" name="cvc"
                                     onChange={handleChange}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <FormGroup>
                        <ControlLabel>Name on Card</ControlLabel>
                        <FormControl type="text" name="name" placeholder="Firstname Lastname"
                                     onChange={handleChange}/>
                    </FormGroup>
                </Col>
                <Col xs={4}>
                    <FormGroup className="expiry">
                        <ControlLabel >Expires</ControlLabel>
                        <div className="expiry">
                            <FormControl type="text" placeholder="MM" name="month"
                                         onChange={handleChange}/>
                            <FormControl type="text" placeholder="YYYY" name="year"
                                         onChange={handleChange}/>
                        </div>
                    </FormGroup>
                </Col>
            </Row>
        </div>;

        const renderBillingAddress = () => <div>
            < ControlLabel >Address</ControlLabel>
            < Row>
                < Col xs={12}>
                    <FormControl type="text" name="addrLine1" placeholder="address line 1" onChange={handleChange}/>
                </Col>
            </Row>
            < Row>
                < Col xs={12}>
                    <FormControl type="text" name="addrLine2" placeholder="address line 2" onChange={handleChange}/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <FormControl type="text" placeholder="city" name="city" onChange={handleChange}/>
                </Col>
                <Col xs={6}>
                    <FormControl type="text" placeholder="state" name="year" onChange={handleChange}/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <FormControl type="text" placeholder="zip code" name="zipCode" onChange={handleChange}/>
                </Col>
                <Col xs={6}>
                    <FormControl type="text" placeholder="country" name="country" onChange={handleChange}/>
                </Col>
            </Row>
        </div>;

        return (
            <form onSubmit={handleSubmit} className="tab-content">
                <Row>
                    <Col xs={8}>
                        <div className="payment-box clearfix">
                            {
                                !this.state.upgradeClicked ? renderCardDetail() : renderBillingAddress()
                            }
                        </div>
                    </Col>
                    <Col xs={4} className="panel-pricing">
                        <Row>
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


                                    {this.state.upgradeClicked ? <div className="goback">
                                            <Button className="btn btn-lg btn-block btn-success payment-button"
                                                    type="submit"
                                                    value="Submit">Pay</Button>
                                            <Clearfix />
                                            <a onClick={handleGoBack}>Go Back</a>
                                        </div>

                                        : <div>
                                            < Button className="btn btn-lg btn-block btn-success" type="submit"
                                                     value="Submit">BUY NOW!</Button>
                                            <Clearfix />
                                        </div>
                                    }
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </form >
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        purchase: (appId, cardDetails, plan) => dispatch(createSale(appId, cardDetails, plan))
    };
};

export default connect(null, mapDispatchToProps)(Upgrade);
