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
        isEnded: 0,
        nextPayment: 0,
    },
    {
        landlord: "Mohammad Hamdan",
        tenant: "Saad Al Jabari",
        property: "Seeb, Khalid St 13",
        startDate: "25-05-2020",
        endDate: "25-11-2020",
        isEnded: 1,
        nextPayment: 2,
    },
    {
        landlord: "Raad Haleeq",
        tenant: "Sara Badawi",
        property: "Salalah, Mubarak St 32. 2nd Floor, Left",
        startDate: "13-09-2020",
        endDate: "13-8-2021",
        isEnded: 0,
        nextPayment: 1,
    },
]

class AllContractsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="All Contracts"
                    breadCrumbParent="Contracts"
                    breadCrumbActive="All Contract"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/contracts/create">
                            <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">CREATE NEW</Button.Ripple>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Table responsive>
                            <thead className="thead-dark">
                                <tr>
                                    <th># Contract NO.</th>
                                    <th>Landlord</th>
                                    <th>Tenant</th>
                                    <th>Property</th>
                                    <th>Status</th>
                                    <th>Next Payment</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contracts.map((contract, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{contract.landlord}</td>
                                        <td>{contract.tenant}</td>
                                        <td>{contract.property}</td>
                                        <td>{contract.isEnded === 0 ? <Badge color="success">Active</Badge> : <Badge color="danger">Ended</Badge>}</td>
                                        <td>{contract.nextPayment === 0 ? <Badge color="success">30/01/2021</Badge> : null}{contract.nextPayment === 1 ? <Badge color="danger"> 30/11/2020 - 15 Days Due</Badge> : null} {contract.nextPayment === 2 ? <Badge color="info">No Payments</Badge> : null}</td>
                                        <td>{contract.startDate}</td>
                                        <td>{contract.endDate}</td>
                                        <td>
                                            <Link to="/contracts/edit">
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

export default AllContractsPage
