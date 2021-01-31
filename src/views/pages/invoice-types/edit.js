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


class EditInvoiceTypePage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Edit existing Invoice Type"
                    breadCrumbParent="System Setup"
                    breadCrumbActive="Edit existing Invoice Type"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/invoice-types">
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
                                                <Label for="invoiceTypeName">Invoice Type Name</Label>
                                                <Input
                                                    type="text"
                                                    name="invoiceTypeName"
                                                    id="invoiceTypeName"
                                                    placeholder="Please invoice type name"
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

export default EditInvoiceTypePage
