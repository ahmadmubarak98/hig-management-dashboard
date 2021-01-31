import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Input,
    Form,
    Button,
    Label,
} from "reactstrap"
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

class EditCountryPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Edit existing Country"
                    breadCrumbParent="System Setup"
                    breadCrumbActive="Edit existing Country"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/countries">
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
                                                <Label for="areaMeters">Country Name</Label>
                                                <Input
                                                    type="text"
                                                    name="Area"
                                                    id="areaMeters"
                                                    placeholder="Please enter country name"
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

export default EditCountryPage
