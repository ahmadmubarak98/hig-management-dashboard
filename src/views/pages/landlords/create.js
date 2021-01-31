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
    CustomInput,
    Form,
    Button,
    Label,
} from "reactstrap"
import { Link } from "react-router-dom"
import Select from "react-select"
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
    { value: "Omani", label: "Omani" },
    { value: "GCC", label: "GCC" },
    { value: "Foreigner", label: "Foreigner" },
]

class CreateLandlordPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Create New Landlords (Agent)"
                    breadCrumbParent="Properties"
                    breadCrumbActive="Create New Landlords (Agent)"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/landlords/all">
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
                                                <Label for="firstName">First Name</Label>
                                                <Input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    placeholder="Please enter First name"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="lastName">Last Name</Label>
                                                <Input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    placeholder="Please enter Last name"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="nationality">Nationality</Label>
                                                <Select
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultValue={typeOptions[0]}
                                                    name="nationality"
                                                    id="nationality"
                                                    options={typeOptions}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="addressLine1">Address Line 1</Label>
                                                <Input
                                                    type="text"
                                                    name="addressLine1"
                                                    id="addressLine1"
                                                    placeholder="Please enter address"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="addressLine2">Address Line 2</Label>
                                                <Input
                                                    type="text"
                                                    name="addressLine2"
                                                    id="addressLine2 "
                                                    placeholder="Please enter address"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="phoneNumber">Phone Number</Label>
                                                <Input
                                                    type="tel"
                                                    name="phoneNumber"
                                                    id="phoneNumber"
                                                    placeholder="Please enter Phone Number"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="lastName">Email</Label>
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Please enter Email"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="lastName">Password</Label>
                                                <Input
                                                    type="password"
                                                    name="password"
                                                    id="emapasswordil"
                                                    placeholder="Please enter Password"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="documents">Documents</Label>
                                                <CustomInput
                                                    type="file"
                                                    multiple="true"
                                                    id="documents"
                                                    name="documents"
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

export default CreateLandlordPage
