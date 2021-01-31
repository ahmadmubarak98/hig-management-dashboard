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

const landlords = [
    { value: "HIG", label: "Hinai Investment Group" },
    { value: "Hussam Khawaldeh", label: "Hussam Khawaldeh" },
    { value: "Ramzi Hawari", label: "Ramzi Hawari" },
]

const customers = [
    { value: "Lama Hiyasat", label: "Lama Hiyasat" },
    { value: "Diana Manaseer", label: "Diana Manaseer" },
    { value: "Suzan Katbi", label: "Suzan Katbi" },
]

const properties = [
    { value: "Building1", label: "Salalah, Jama Street 29 Building" },
    { value: "apartment", label: "Seeb, Abdallah Street 15 2nd Floor, right" },
    { value: "MuscatOffice", label: "Muscat, Khalid Street 20 Avenue 5th Floor Office Nr. 16" },
]

const paymentTerms = [
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Quarterly", label: "Quarterly" },
    { value: "Anually", label: "Anually" },
]


class CreateContractPage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Create New Contract"
                    breadCrumbParent="Contracts"
                    breadCrumbActive="Create New Contract"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/contracts/all">
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
                                                <Label for="landlord">LandLord</Label>
                                                <Select
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultValue={landlords[0]}
                                                    name="landlord"
                                                    id="landlord"
                                                    options={landlords}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="customer">Customer (Tenant)</Label>
                                                <Select
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultValue={customers[0]}
                                                    name="customer"
                                                    id="customer"
                                                    options={customers}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="property">Property</Label>
                                                <Select
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultValue={properties[0]}
                                                    name="property"
                                                    id="property"
                                                    options={properties}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="rent">Rent in <small>OMR</small></Label>
                                                <InputMask
                                                    className="form-control"
                                                    mask="OMR 99999999"
                                                    placeholder="Enter Rent In OMR"
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col md="6" sm="12">
                                            <FormGroup>
                                                <Label for="paymentTerms">Payment Terms</Label>
                                                <Select
                                                    className="React"
                                                    classNamePrefix="select"
                                                    defaultValue={paymentTerms[0]}
                                                    name="paymentTerms"
                                                    id="paymentTerms"
                                                    options={paymentTerms}
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

export default CreateContractPage
