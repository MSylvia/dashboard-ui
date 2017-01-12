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
import {paymentCountries} from '../../config';

class Upgrade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: planList.plans[parseInt(this.props.planId)],
            cardDetails: {
                number: "", cvc: "", expMonth: "", expYear: "",
                billing: {
                    name: "",
                    addrLine1: "",
                    addrLine2: "",
                    city: "",
                    state: "",
                    zipCode: ""
                }
            },
            upgradeClicked: false,
            error: this.props.error ? this.props.error : null
        };
    }

    render() {

        const handleSelect = (eventKey) => this.setState({
            plan: planList.plans[eventKey - 1]
        });

        const handleSubmit = (event) => {
            event.preventDefault();

            let error = null;
            if (this.state.upgradeClicked === false) {
                error = validateCardMainDetails(this.state.cardDetails);
                if (error !== null) {
                    return this.setState({error: error});
                }

                return this.setState({upgradeClicked: true});
            }

            error = validateBillingDetails(this.state.cardDetails);
            if (error !== null && typeof error !== "undefined") {
                return this.setState({error: error});
            }

            error = fieldsRequiredForCountries(this.state.cardDetails.billing.country);
            if (error === true) {
                return this.setState({error: "Please select only from listed countries"});
            }

            this.props.purchase(this.props.appId, this.state.cardDetails, this.state.plan.id);

            this.setState({error: null});
        };

        const handleGoBack = (event) => {
            event.preventDefault();
            this.setState({upgradeClicked: false, error: null});
        };

        const handleChange = (e) => {
            this.setState({error: null});
            switch (e.target.name) {
                case 'expYear' :
                    this.setState({cardDetails: {...this.state.cardDetails, expYear: e.target.value}});
                    break;
                case 'expMonth' :
                    this.setState({cardDetails: {...this.state.cardDetails, expMonth: e.target.value}});
                    break;
                case 'cvc' :
                    this.setState({cardDetails: {...this.state.cardDetails, cvc: e.target.value}});
                    break;
                case 'number' :
                    this.setState({cardDetails: {...this.state.cardDetails, number: e.target.value}});
                    break;
                case 'addrLine1' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.cardDetails.billing, addrLine1: e.target.value}
                        }
                    });
                    break;
                case 'addrLine2' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.cardDetails.billing, addrLine2: e.target.value}
                        }
                    });
                    break;
                case 'city' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.cardDetails.billing, city: e.target.value}
                        }
                    });
                    break;
                case 'country' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.cardDetails.billing, country: e.target.value}
                        }
                    });
                    break;
                case 'name' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.cardDetails.billing, name: e.target.value}
                        }
                    });
                    break;
                case 'state' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.cardDetails.billing, state: e.target.value}
                        }
                    });
                    break;
                case 'zipCode' :
                    this.setState({
                        cardDetails: {
                            ...this.state.cardDetails,
                            billing: {...this.state.cardDetails.billing, zipCode: e.target.value}
                        }
                    });
                    break;
            }
        };

        function validateCardMainDetails(cardDetails) {
            let errorMsg = null;
            if (!cardDetails.billing.name) {
                return "Card holder's name is required";
            }
            if (cardDetails.billing.name && cardDetails.billing.name.length >= 129) {
                return "Card holder's name shoudn't exceed 128 Chars";
            }

            if (!cardDetails.number || cardDetails.number.length !== 16) {
                return "Invalid Card";
            }

            let cardNumber = parseInt(cardDetails.number);
            if (isNaN(cardNumber)) {
                return "Invalid Card, Only 16 digits allowed";
            }

            if (!cardDetails.expMonth || cardDetails.expMonth === "0" || cardDetails.expMonth.length > 2) {
                return "Invalid Exp Month";
            }

            if (!cardDetails.expYear || cardDetails.expYear === "0" || cardDetails.expYear.length > 4) {
                return "Invalid Exp Year";
            }

            if (!cardDetails.cvc || cardDetails.cvc.length !== 3) {
                return "Invalid CVC";
            }

            let cardCVC = parseInt(cardDetails.cvc);
            if (isNaN(cardCVC)) {
                return "Invalid CVC, Only 3 digits allowed";
            }

            return errorMsg;
        }

        function validateBillingDetails(cardDetails) {
            let errorMsg = null;
            if (!cardDetails.billing.addrLine1) {
                return "Address1 cannot be null";
            }

            if (cardDetails.billing.addrLine1 && cardDetails.billing.addrLine1.length > 64) {
                return "Address1 should not exceed 64 Chars";
            }

            if (!cardDetails.billing.city) {
                return "City cannot be null";
            }

            if (cardDetails.billing.city && cardDetails.billing.city.length > 64) {
                return "City should not exceed 64 Chars";
            }

            if (!cardDetails.billing.state && cardDetails.billing.country && fieldsRequiredForCountries(cardDetails.billing.country)) {
                return "State cannot be null for selected country";
            }

            if (cardDetails.billing.state && cardDetails.billing.state.length > 64) {
                return "State should not exceed 64 Chars";
            }

            if (!cardDetails.billing.zipCode && cardDetails.billing.country && fieldsRequiredForCountries(cardDetails.billing.country)) {
                return "Zipcode cannot be null for selected country";
            }

            if (cardDetails.billing.zipCode && cardDetails.billing.zipCode.length > 16) {
                return "Zipcode should not exceed 16 Chars";
            }

            if (!cardDetails.billing.country || cardDetails.billing.country === "0") {
                return "Country cannot be null";
            }

            if (cardDetails.billing.country && cardDetails.billing.country.length > 64) {
                return "Country should not exceed 64 Chars";
            }

            if (!cardDetails.billing.addrLine2 && cardDetails.billing.country && (cardDetails.billing.country === "CHN" || cardDetails.billing.country === "JPN" || cardDetails.billing.country === "RUS")) {
                return "Address2 cannot be null for selected country.";
            }
        }

        function fieldsRequiredForCountries(country) {
            country = country.trim();
            if (country === "ARG" || country === "AUS" || country === "BGR" || country === "CAN" || country === "CHN" || country === "CYP" || country === "EGY" || country === "FRA" || country === "IND" || country === "IDN" || country === "ITA" || country === "JPN" || country === "MYS" || country === "MEX" || country === "NLD" || country === "PAN" || country === "PHL" || country === "POL" || country === "ROU" || country === "RUS" || country === "SRB" || country === "SGP" || country === "ZAF" || country === "ESP" || country === "SWE" || country === "THA" || country === "TUR" || country === "GBR" || country === "USA") {
                return false;
            }
            return true;
        }

        const renderCardDetail = () => <div>

            <div style={{height: 45}}>
                100% money back guarantee for the first 30 days on paid plans.
            </div>
            < Row>
                < Col xs={8}>
                    < FormGroup >
                        < ControlLabel > Card number</ControlLabel>
                        <InputGroup>
                            <InputGroup.Addon><CreditCard color={grey500}/></InputGroup.Addon>
                            <FormControl type="text" name="number" value={this.state.cardDetails.number}
                                         placeholder="•••• •••• •••• ••••"
                                         onChange={handleChange}/>
                        </InputGroup>
                    </FormGroup>
                </Col>
                <Col xs={4}>
                    <FormGroup>
                        <ControlLabel>Security Code</ControlLabel>
                        <FormControl type="text" placeholder="123" name="cvc" value={this.state.cardDetails.cvc}
                                     onChange={handleChange}/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <FormGroup>
                        <ControlLabel>Name on Card</ControlLabel>
                        <FormControl type="text" name="name" placeholder="Firstname Lastname"
                                     onChange={handleChange} value={this.state.cardDetails.billing.name}/>
                    </FormGroup>
                </Col>
                <Col xs={4}>
                    <FormGroup className="expiry">
                        <ControlLabel >Expires</ControlLabel>
                        <div className="expiry">
                            <FormControl type="text" placeholder="MM" name="expMonth"
                                         onChange={handleChange} value={this.state.cardDetails.expMonth}/>
                            <FormControl type="text" placeholder="YYYY" name="expYear"
                                         onChange={handleChange} value={this.state.cardDetails.expYear}/>
                        </div>
                    </FormGroup>
                </Col>
            </Row>
        </div>;

        const renderBillingAddress = () => <div>
            < ControlLabel >Address</ControlLabel>
            < Row>
                < Col xs={12}>
                    <FormControl type="text" name="addrLine1" placeholder="address line 1" onChange={handleChange}
                                 value={this.state.cardDetails.billing.addrLine1}/>
                </Col>
            </Row>
            < Row>
                < Col xs={12}>
                    <FormControl type="text" name="addrLine2" placeholder="address line 2" onChange={handleChange}
                                 value={this.state.cardDetails.billing.addrLine2}/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <FormControl type="text" placeholder="city" name="city" onChange={handleChange}
                                 value={this.state.cardDetails.billing.city}/>
                </Col>
                <Col xs={6}>
                    <FormControl type="text" placeholder="state" name="state" onChange={handleChange}
                                 value={this.state.cardDetails.billing.state}/>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <FormControl type="text" placeholder="zip code" name="zipCode" onChange={handleChange}
                                 value={this.state.cardDetails.billing.zipCode}/>
                </Col>
                <Col xs={6}>
                    <FormControl componentClass="select"
                                 defaultValue={this.state.cardDetails.billing.country}
                                 placeholder="select"
                                 name="country"
                                 onChange={handleChange}>
                        {
                            paymentCountries.map((country) => {
                                return <option key={country.code} value={country.code}> {country.label}</option>;
                            })
                        }
                    </FormControl>
                </Col>
            </Row>
        </div>;

        return (
            <form onSubmit={handleSubmit} className="tab-content">
                { (this.state.error ) ?
                    <Row className="payment-row clearfix">
                        <div className="error">
                            {this.state.error}
                        </div>
                    </Row> : <div style={{height: 35}}></div>
                }
                <Row className="payment-row">
                    <Col xs={8} className="payment-col">
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
                                        <NavDropdown title={this.state.plan.name} id="planName"
                                                     onSelect={handleSelect}>
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
                                        {this.state.plan.mongoDbAccess ?
                                            <Check viewBox="0 0 24 16" style={{width: 18, height: 16}}/> : " -"}</li>
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
                                                     disabled={this.state.error !== null}
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

const mapStateToProps = (state) => {
    if (typeof state.manageApp !== 'undefined' && typeof state.manageApp.error !== 'undefined')
        return {
            error: state.manageApp.error
        };
    else
        return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        purchase: (appId, cardDetails, plan) => dispatch(createSale(appId, cardDetails, plan))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Upgrade);
