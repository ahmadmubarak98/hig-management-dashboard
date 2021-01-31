import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Link } from "react-router-dom"

const contracts = [
    {
        landlord: "HIG",
        tenant: "Marah Mrayan",
        property: "Salalah, Hussam St 29 Office Nr. 21",
        startDate: "30-12-2020",
        endDate: "30-6-2021",
        confirmed: 1,
    },
    {
        landlord: "Mohammad Hamdan",
        tenant: "Saad Al Jabari",
        property: "Seeb, Khalid St 13",
        startDate: "25-05-2020",
        endDate: "25-11-2020",
        confirmed: 0,
    },
    {
        landlord: "Raad Haleeq",
        tenant: "Sara Badawi",
        property: "Salalah, Mubarak St 32. 2nd Floor, Left",
        startDate: "13-09-2020",
        endDate: "13-8-2021",
        confirmed: 1,
    },
]

class AllLeaseOrders extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="All Lease Orders"
                    breadCrumbParent="Lease Orders"
                    breadCrumbActive="All Lease Orders"
                />
                {/* <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/lease-orders/create">
                            <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">CREATE NEW</Button.Ripple>
                        </Link>
                    </Col>
                </Row> */}
                <Row>
                    <Col sm="12">
                        <Table responsive>
                            <thead className="thead-dark">
                                <tr>
                                    <th># Lease Order NO.</th>
                                    <th>Tenant</th>
                                    <th>Landlord</th>
                                    <th>Property</th>
                                    <th>Status</th>
                                    <th>Move-In Date</th>
                                    <th>Leave Date</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contracts.map((contract, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{contract.tenant}</td>
                                        <td>{contract.landlord}</td>
                                        <td>{contract.property}</td>
                                        <td>{contract.confirmed === 0 ? <Badge color="success">Accepted</Badge> : <Badge color="danger">Rejected</Badge>}</td>
                                        <td>{contract.startDate}</td>
                                        <td>{contract.endDate}</td>
                                        <td>
                                            {contract.confirmed === 0 ? (<>
                                                <Button.Ripple className="mr-1 mb-1 round" outline color="warning">Review</Button.Ripple>
                                                <Button.Ripple className="mr-1 mb-1 round" outline color="success">Accept</Button.Ripple>
                                                <Button.Ripple className="mr-1 mb-1 round" outline color="danger">Reject</Button.Ripple>
                                            </>) : null}
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

export default AllLeaseOrders
