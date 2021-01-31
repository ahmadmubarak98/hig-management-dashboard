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
import InputMask from "react-input-mask"
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

const users = [
    { value: "HIG", label: "Hinai Investment Group" },
    { value: "Hussam Khawaldeh", label: "Hussam Khawaldeh" },
    { value: "Ramzi Hawari", label: "Ramzi Hawari" },
]

const invoiceTypes = [
    { value: "Rent Fees", label: "Rent Fees" },
    { value: "Service Fee", label: "Service Fee" },
]


class EditInvoicePage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Edit existing Invoice"
                    breadCrumbParent="Invoices"
                    breadCrumbActive="Edit existing Invoice"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/invoices">
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
                                                <Label for="issuedFor">Issued For</Label>
                                                <Select
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultValue={users[0]}
                                                    name="issuedFor"
                                                    id="issuedFor"
                                                    options={users}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="invoiceType">Invoice Type</Label>
                                                <Select
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultValue={invoiceTypes[0]}
                                                    name="invoiceType"
                                                    id="invoiceType"
                                                    options={invoiceTypes}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12">
                                            <FormGroup>
                                                <Label for="invoiceType">Details</Label>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="12" className="mb-2">
                                            <Row className="mb-1">
                                                <Col sm="6">
                                                    <Input
                                                        type="textarea"
                                                        name="details"
                                                        id="details"
                                                        rows="3"
                                                        placeholder="Please enter amount details"
                                                    />
                                                </Col>
                                                <Col sm="6">
                                                    <InputMask
                                                        className="form-control"
                                                        mask="OMR 99999999"
                                                        placeholder="Enter amount In OMR"
                                                    />
                                                </Col>
                                            </Row>

                                            <Button.Ripple className="mr-1 mb-1 round" outline color="info">Add New Row</Button.Ripple>
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

export default EditInvoicePage
