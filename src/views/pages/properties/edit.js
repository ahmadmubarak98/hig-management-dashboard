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
} from "reactstrap"
import InputMask from "react-input-mask"
import { Map, TileLayer, Marker } from "react-leaflet"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import Select from "react-select"
import { Link } from "react-router-dom"
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
const groupedOptions = [
    {
        label: "Oman",
        options: [
            { value: "Salalah", label: "Salalah" },
            { value: "Muscat", label: "Muscat" },
            { value: "Seeb", label: "Seeb" },
        ]
    },
    {
        label: "United Arab Emirates",
        options: [
            { value: "Dubai", label: "Dubai" },
            { value: "Abu Dhabi", label: "Abu Dhabi" }
        ]
    },
    {
        label: "Saudi Arabia",
        options: [
            { value: "Riyadh", label: "Riyadh" },
            { value: "Jeddah", label: "Jeddah" }
        ]
    }
]

const typeOptions = [
    { value: "Building", label: "Building" },
    { value: "Warehouse", label: "Warehouse" },
    { value: "Office", label: "Office" },
    { value: "Apartment", label: "Apartment" },
]

const amenities = ["Internet", "Electricity", "Water", "Parking", "Washing Machine", "Dish Washer", "Furnished"]

class EditPropertyPage extends React.Component {
    state = {
        center: [17.0194, 54.1108],
        zoom: 13,
        propertyNumber: "1923826",
        city: "Salalah",
        addressLine1: "Salalah, Oman",
        addressLine2: "Omar Bin Ali St. 25, second floor left",
        propertyType: "Office",
        areaMeters: 80,
        dailyRent: 50,
        weeklyRent: 350,
        monthlyRent: 950,
        amenities: ["Internet", "Electricity", "Parking", "Water", "Furnished"]
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Edit existing Property"
                    breadCrumbParent="Properties"
                    breadCrumbActive="Edit existing Property"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/properties/all">
                            <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">VIEW ALL</Button.Ripple>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Card>
                            <CardHeader>
                                {/* <CardTitle>Multiple Column</CardTitle> */}
                            </CardHeader>
                            <CardBody>
                                <Form className="mt-2">
                                    <Row>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="propertyNumber">Property NO. #</Label>
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    id="propertyNumber"
                                                    placeholder="Property NO. # - Auto-generated"
                                                    value={this.state.propertyNumber}
                                                    onChange={(e) => this.setState({ propertyNumber: e.target.value })}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="city">City</Label>
                                                <Select
                                                    id="city"
                                                    name="city"
                                                    options={groupedOptions}
                                                    formatGroupLabel={formatGroupLabel}
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultInputValue={this.state.city}
                                                    onChange={(e) => this.setState({ city: e.value })}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="addressLine1">Address Line 1</Label>
                                                <Input
                                                    id="addressLine1"
                                                    name="addressLine1"
                                                    type="text"
                                                    placeholder="Please enter address line 1"
                                                    value={this.state.addressLine1}
                                                    onChange={(e) => this.setState({ addressLine1: e.target.value })}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="addressLine2">Address Line 2</Label>
                                                <Input
                                                    id="addressLine2"
                                                    name="addressLine2"
                                                    type="text"
                                                    placeholder="Please enter address line 2"
                                                    value={this.state.addressLine2}
                                                    onChange={(e) => this.setState({ addressLine2: e.target.value })}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="propertyType">Property Type</Label>
                                                <Select
                                                    id="propertyType"
                                                    name="propertyType"
                                                    options={typeOptions}
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultInputValue={this.state.propertyType}
                                                    onChange={(e) => this.setState({ propertyType: e.value })}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="areaMeters">Area (Meters)</Label>
                                                <Input
                                                    id="areaMeters"
                                                    name="areaMeters"
                                                    type="text"
                                                    placeholder="Area in meters"
                                                    value={this.state.areaMeters}
                                                    onChange={(e) => this.setState({ areaMeters: e.target.value })}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="dailyRent">Daily Rent in <small>OMR</small></Label>
                                                <InputMask
                                                    id="dailyRent"
                                                    name="dailyRent"
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Enter Daily Rent In OMR"
                                                    value={this.state.dailyRent}
                                                    onChange={(e) => this.setState({ dailyRent: e.target.value })}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="weeklyRent">Weekly Rent in <small>OMR</small></Label>
                                                <InputMask
                                                    id="weeklyRent"
                                                    name="weeklyRent"
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Enter Weekly Rent In OMR"
                                                    value={this.state.weeklyRent}
                                                    onChange={(e) => this.setState({ weeklyRent: e.target.value })}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="monthlyRent">Monthly Rent in <small>OMR</small></Label>
                                                <InputMask
                                                    id="monthlyRent"
                                                    name="monthlyRent"
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Enter Monthly Rent In OMR"
                                                    value={this.state.monthlyRent}
                                                    onChange={(e) => this.setState({ monthlyRent: e.target.value })}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup>
                                                <Label>Available Ameneties</Label>
                                                <Row>
                                                    {amenities.map(amenity => (
                                                        <Col sm="6">
                                                            <CustomInput
                                                                className="custom-switch-info mr-1 mb-2"
                                                                type="switch"
                                                                id={amenity}
                                                                name={amenity}
                                                                inline
                                                                checked={this.state.amenities.includes(amenity)}
                                                                // onChange={}
                                                            >
                                                                <Label for={amenity} className="mb-0 switch-label">{amenity}</Label>
                                                            </CustomInput>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup>
                                                <Label for="notes">Notes</Label>
                                                <Input
                                                    id="notes"
                                                    name="notes"
                                                    type="textarea"
                                                    rows="3"
                                                    placeholder="Notes"
                                                    value={this.state.notes}
                                                    onChange={(e) => this.setState({ notes: e.target.value })}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup>
                                                <Label for="details">Details (Shown in listing)</Label>
                                                <Input
                                                    id="details"
                                                    name="details"
                                                    type="textarea"
                                                    rows="3"
                                                    placeholder="Textarea"
                                                    value={this.state.details}
                                                    onChange={(e) => this.setState({ details: e.target.value })}
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
                    <Col sm="6">
                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle>Map</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Map center={this.state.center} zoom={this.state.zoom}>
                                    <TileLayer
                                        attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={this.state.center} />
                                </Map>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment >
        )
    }
}

export default EditPropertyPage
