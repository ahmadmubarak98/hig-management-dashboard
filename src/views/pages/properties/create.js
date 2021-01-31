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

class AllPropertiesPage extends React.Component {
    state = {
        center: [17.0194, 54.1108],
        zoom: 13
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Create new Property"
                    breadCrumbParent="Properties"
                    breadCrumbActive="Create new Property"
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
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="city">City</Label>
                                                <Select
                                                    id="city"
                                                    // defaultValue={colourOptions[1]}
                                                    options={groupedOptions}
                                                    formatGroupLabel={formatGroupLabel}
                                                    className="React"
                                                    classNamePrefix="select"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="areaMeters">Address Line 1</Label>
                                                <Input
                                                    type="text"
                                                    name="Area"
                                                    id="areaMeters"
                                                    placeholder="Area in meters"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="areaMeters">Address Line 2</Label>
                                                <Input
                                                    type="text"
                                                    name="Area"
                                                    id="areaMeters"
                                                    placeholder="Area in meters"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="type">Property Type</Label>
                                                <Select
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultValue={typeOptions[0]}
                                                    name="color"
                                                    options={typeOptions}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="areaMeters">Area (Meters)</Label>
                                                <Input
                                                    type="text"
                                                    name="Area"
                                                    id="areaMeters"
                                                    placeholder="Area in meters"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="areaMeters">Daily Rent in <small>OMR</small></Label>
                                                <InputMask
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Enter Daily Rent In OMR"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="areaMeters">Weekly Rent in <small>OMR</small></Label>
                                                <InputMask
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Enter Weekly Rent In OMR"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="areaMeters">Monthly Rent in <small>OMR</small></Label>
                                                <InputMask
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Enter Monthly Rent In OMR"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup>
                                                <Label for="areaMeters">Available Ameneties</Label>
                                                <Row>
                                                    {amenities.map(amenity => (
                                                        <Col sm="6">
                                                            <CustomInput
                                                                className="custom-switch-info mr-1 mb-2"
                                                                type="switch"
                                                                id={amenity}
                                                                name={amenity}
                                                                inline
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
                                                <Label for="areaMeters">Notes</Label>
                                                <Input
                                                    type="textarea"
                                                    name="text"
                                                    id="exampleText"
                                                    rows="3"
                                                    placeholder="Textarea"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
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

export default AllPropertiesPage
