import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Search, Inbox, Camera } from "react-feather"
import { Link } from "react-router-dom"

class LeasedPropertiesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Leased Properties"
                    breadCrumbParent="Properties"
                    breadCrumbActive="Leased Properties"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/properties/create">
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
                                    <th>Property Location</th>
                                    <th>Property Type</th>
                                    <th>Tenant</th>
                                    <th>Move-Out Date</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Seeb</td>
                                    <td>Warehouse</td>
                                    <td>
                                        Mohammad Hamdan
                                    </td>
                                    <td>30/8/2021</td>
                                    <td>
                                        <Link to="edit">
                                            <Button.Ripple className="mr-1 mb-1 round" outline color="warning">Edit</Button.Ripple>
                                        </Link>
                                        <Button.Ripple className="mr-1 mb-1 round" outline color="danger">Delete</Button.Ripple>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Salalah</td>
                                    <td>Office</td>
                                    <td>
                                        {/* <Badge color="info">Info</Badge> */}
                                        Ismael Al Abdallat
                                        {/* <Badge color="warning">Empty</Badge> */}
                                    </td>
                                    <td>29/04/2021</td>
                                    <td>
                                        <Link to="edit">
                                            <Button.Ripple className="mr-1 mb-1 round" outline color="warning">Edit</Button.Ripple>
                                        </Link>
                                        <Button.Ripple className="mr-1 mb-1 round" outline color="danger">Delete</Button.Ripple>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Nizwah</td>
                                    <td>Apartment</td>
                                    <td>
                                        Nuha Al Khateeb
                                    </td>
                                    <td>30/01/2021</td>
                                    <td>
                                        <Link to="edit">
                                            <Button.Ripple className="mr-1 mb-1 round" outline color="warning">Edit</Button.Ripple>
                                        </Link>
                                        <Button.Ripple className="mr-1 mb-1 round" outline color="danger">Delete</Button.Ripple>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default LeasedPropertiesPage
