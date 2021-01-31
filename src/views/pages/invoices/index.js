import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Link } from "react-router-dom"

const invoices = [
    {
        issuedFor: "Marah Mrayan",
        type: "Rent Fees",
        amount: "130",
        issueDate: "30-6-2020",
    },
    {
        issuedFor: "Adel Al Ali",
        type: "Rent Fees",
        amount: "280",
        issueDate: "30-6-2020",
    },
]

class AllInvoicesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="All Invoices"
                    breadCrumbParent="Invoices"
                    breadCrumbActive="All Invoices"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/invoices/create">
                            <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">CREATE NEW</Button.Ripple>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Table responsive>
                            <thead className="thead-dark">
                                <tr>
                                    <th># Invoice NO.</th>
                                    <th>Issued For</th>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Issue Date</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoices.map((invoice, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{invoice.issuedFor}</td>
                                        <td>{invoice.type}</td>
                                        <td>{invoice.amount} OMR</td>
                                        <td>{invoice.issueDate}</td>
                                        <td>
                                            <Link to="/invoices/1">
                                                <Button.Ripple className="mr-1 mb-1 round" outline color="info">View</Button.Ripple>
                                            </Link>
                                            <Link to="/invoices/edit">
                                                <Button.Ripple className="mr-1 mb-1 round" outline color="warning">Edit</Button.Ripple>
                                            </Link>
                                            <Button.Ripple className="mr-1 mb-1 round" outline color="danger">Delete</Button.Ripple>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default AllInvoicesPage
