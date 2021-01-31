import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Input,
    Form,
    Button,
    Label,
    CustomInput,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from "reactstrap"
import InputMask from "react-input-mask"
import Select from "react-select"
import { Link } from "react-router-dom"
import classnames from "classnames"
import { Eye, Code } from "react-feather"
import "../../../assets/scss/plugins/extensions/maps.scss"

const formatGroupLabel = data => (
    <div className="d-flex justify-content-between align-center">
        <strong>
            {" "}
            <span>{data.label}</span>
        </strong>
        <span>{data.options.length}</span>
    </div>
)

const typeOptions = [
    { value: "Building", label: "Building" },
    { value: "Warehouse", label: "Warehouse" },
    { value: "Office", label: "Office" },
    { value: "Apartment", label: "Apartment" },
]


class SettingsPage extends React.Component {
    state = {
        activeTab: "1",
        active: "1",

        companyNameEnglish: "Al Hinai Investment Group",
        companyNameArabic: "مجموعة الهنائي للاستثمار",
        currencyCodeEnglish: "OMR",
        currencyCodeArabic: "OMR",
        currencyNameEnglish: "Omani Riyals",
        currencyNameArabic: "ريال عماني",

        currencyValueUSD: 2.60,
        percentageFromLandlordSale: 1.5,
        tenantRentFixedFee: 80,
        landlordRentFixedFee: 50,
    }

    toggleTab = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab })
        }
    }

    toggle = tab => {
        if (this.state.active !== tab) {
            this.setState({ active: tab })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="System Settings"
                    breadCrumbParent="System Setup"
                    breadCrumbActive="System Settings"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        {/* <Link to="/properties/all">
                            <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">VIEW ALL</Button.Ripple>
                        </Link> */}
                    </Col>
                </Row>

                {/* Settings Language */}
                <Row>
                    <Col sm="6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Basic Configuration</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.active === "1"
                                                    })}
                                                    onClick={() => {
                                                        this.toggle("1")
                                                    }}
                                                >English Configuration</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: this.state.active === "2"
                                                    })}
                                                    onClick={() => {
                                                        this.toggle("2")
                                                    }}
                                                >Arabic Configuration</NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent className="py-50" activeTab={this.state.active}>
                                            <TabPane tabId="1">

                                                <Form className="mt-2">
                                                    <Row>
                                                        <Col md="6" sm="12">
                                                            <FormGroup>
                                                                <Label for="companyName">Company Name</Label>
                                                                <Input
                                                                    type="text"
                                                                    name="companyName"
                                                                    id="companyName"
                                                                    placeholder="Please enter company name in English."
                                                                    value={this.state.companyNameEnglish}
                                                                />
                                                            </FormGroup>
                                                        </Col>

                                                        <Col md="6" sm="12">
                                                            <FormGroup>
                                                            </FormGroup>
                                                        </Col>

                                                        <Col md="6" sm="12">
                                                            <FormGroup>
                                                                <Label for="currencyCode">Currency Code</Label>
                                                                <Input
                                                                    type="text"
                                                                    name="currencyCode"
                                                                    id="currencyCode"
                                                                    placeholder="Please enter currency code."
                                                                    value={this.state.currencyCodeEnglish}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="6" sm="12">
                                                            <FormGroup>
                                                                <Label for="currencyValueUSD">Currency Name</Label>
                                                                <Input
                                                                    type="text"
                                                                    id="currencyNameEnglish"
                                                                    name="currencyNameEnglish"
                                                                    placeholder="Please enter currency name in english."
                                                                    value={this.state.currencyNameEnglish}
                                                                />
                                                            </FormGroup>
                                                        </Col>

                                                        {/* <Col sm="12">
                                            <FormGroup>
                                                <Label for="areaMeters">Details (Shown in listing)</Label>
                                                <Input
                                                    type="textarea"
                                                    name="text"
                                                    id="exampleText"
                                                    rows="3"
                                                    placeholder="Textarea"
                                                />
                                            </FormGroup>
                                        </Col> */}

                                                        <Col sm="12">
                                                            <FormGroup className="form-label-group">
                                                                <Button.Ripple
                                                                    color="primary"
                                                                    type="submit"
                                                                    className="mr-1 mb-1"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Submit
                  </Button.Ripple>
                                                                <Button.Ripple
                                                                    outline
                                                                    color="warning"
                                                                    type="reset"
                                                                    className="mb-1"
                                                                >
                                                                    Reset
                  </Button.Ripple>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </TabPane>
                                            <TabPane tabId="2">

                                                <Form className="mt-2">
                                                    <Row>
                                                        <Col md="6" sm="12">
                                                            <FormGroup>
                                                                <Label for="companyName">Company Name</Label>
                                                                <Input
                                                                    type="text"
                                                                    name="companyName"
                                                                    id="companyName"
                                                                    placeholder="Please enter company name in Arabic."
                                                                    value={this.state.companyNameArabic}
                                                                />
                                                            </FormGroup>
                                                        </Col>

                                                        <Col md="6" sm="12">
                                                            <FormGroup>
                                                            </FormGroup>
                                                        </Col>

                                                        <Col md="6" sm="12">
                                                            <FormGroup>
                                                                <Label for="currencyCode">Currency Code</Label>
                                                                <Input
                                                                    type="text"
                                                                    name="currencyCode"
                                                                    id="currencyCode"
                                                                    placeholder="Please enter currency code."
                                                                    value={this.state.currencyCodeArabic}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                        <Col md="6" sm="12">
                                                            <FormGroup>
                                                                <Label for="currencyValueUSD">Currency Name</Label>
                                                                <Input
                                                                    type="text"
                                                                    id="currencyNameEnglish"
                                                                    name="currencyNameEnglish"
                                                                    placeholder="Please enter currency name in arabic."
                                                                    value={this.state.currencyNameArabic}
                                                                />
                                                            </FormGroup>
                                                        </Col>

                                                        {/* <Col sm="12">
                                            <FormGroup>
                                                <Label for="areaMeters">Details (Shown in listing)</Label>
                                                <Input
                                                    type="textarea"
                                                    name="text"
                                                    id="exampleText"
                                                    rows="3"
                                                    placeholder="Textarea"
                                                />
                                            </FormGroup>
                                        </Col> */}

                                                        <Col sm="12">
                                                            <FormGroup className="form-label-group">
                                                                <Button.Ripple
                                                                    color="primary"
                                                                    type="submit"
                                                                    className="mr-1 mb-1"
                                                                    onClick={e => e.preventDefault()}
                                                                >
                                                                    Submit
                  </Button.Ripple>
                                                                <Button.Ripple
                                                                    outline
                                                                    color="warning"
                                                                    type="reset"
                                                                    className="mb-1"
                                                                >
                                                                    Reset
                  </Button.Ripple>
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </TabPane>
                                        </TabContent>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>



                {/* Settings */}
                <Row>
                    <Col sm="6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Advanced Configuration</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form className="mt-2">
                                    <Row>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="currencyValueUSD">Currency value in USD</Label>
                                                <Input
                                                    type="text"
                                                    id="currencyValueUSD"
                                                    name="currencyValueUSD"
                                                    placeholder="Please enter currency code."
                                                    value={this.state.currencyValueUSD}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="percentageFromLandlordSale">% to take from Landlord sale</Label>
                                                <Input
                                                    type="text"
                                                    id="percentageFromLandlordSale"
                                                    name="percentageFromLandlordSale"
                                                    placeholder={"% to take from landlord sale"}
                                                    value={this.state.percentageFromLandlordSale}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="tenantRentFixedFee">Fixed fee from 3rd party rent (Tenant) in <small>OMR</small></Label>
                                                <InputMask
                                                    id="tenantRentFixedFee"
                                                    name="tenantRentFixedFee"
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Fixed fee from 3rd party rent (Tenant) In OMR"
                                                    value={this.state.tenantRentFixedFee}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="landlordRentFixedFee">Fixed fee from 3rd party rent (Landlord) in <small>OMR</small></Label>
                                                <InputMask
                                                    id="landlordRentFixedFee"
                                                    name="landlordRentFixedFee"
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Fixed fee from 3rd party rent (Landlord) In OMR"
                                                    value={this.state.landlordRentFixedFee}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup className="form-label-group">
                                                <Button.Ripple
                                                    color="primary"
                                                    type="submit"
                                                    className="mr-1 mb-1"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Submit
                  </Button.Ripple>
                                                <Button.Ripple
                                                    outline
                                                    color="warning"
                                                    type="reset"
                                                    className="mb-1"
                                                >
                                                    Reset
                  </Button.Ripple>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment >
        )
    }
}

export default SettingsPage
