import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Link } from "react-router-dom"

const customers = [
    {
        name: "Ahmad Mubarak",
        nationality: "GCC"
    },
    {
        name: "Mohammad Hamdan",
        nationality: "Foreigner"
    },
    {
        name: "Saad Al Jabari",
        nationality: "Saudi Arabia"
    },
    {
        name: "Raad Haleqq",
        nationality: "Foreigner"
    },
]

class AllLandlordsPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="All Landlords (Agents)"
                    breadCrumbParent="Landlords"
                    breadCrumbActive="All Landlords (Agents)"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/landlords/create">
                            <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">CREATE NEW</Button.Ripple>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Table responsive>
                            <thead className="thead-dark">
                                <tr>
                                    <th># NO.</th>
                                    <th>Name</th>
                                    <th>Nationality</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{customer.name}</td>
                                        <td>{customer.nationality}</td>
                                        <td>
                                            <Link to="/landlords/edit">
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

export default AllLandlordsPage
