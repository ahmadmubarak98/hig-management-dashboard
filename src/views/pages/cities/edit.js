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

const typeOptions = [
    { value: "Oman", label: "Oman" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
]

class EditCityPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Edit existing City"
                    breadCrumbParent="System Setup"
                    breadCrumbActive="Edit existing City"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/cities">
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
                                                <Label for="areaMeters">Country</Label>
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
                                                <Label for="areaMeters">City Name</Label>
                                                <Input
                                                    type="text"
                                                    name="Area"
                                                    id="areaMeters"
                                                    placeholder="Please enter city name"
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

export default EditCityPage
