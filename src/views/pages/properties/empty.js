import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Search, Inbox, Camera } from "react-feather"
import { Link } from "react-router-dom"

class EmptyPropertiesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="Empty Properties"
                    breadCrumbParent="Properties"
                    breadCrumbActive="Empty Properties"
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
                                    <th>LISTED</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Muscat</td>
                                    <td>Office</td>
                                    <td>NO</td>
                                    <td>
                                        <Button.Ripple className="mr-1 mb-1 round" outline color="info">Submit to Listings</Button.Ripple>
                                        <Link to="edit">
                                            <Button.Ripple className="mr-1 mb-1 round" outline color="warning">Edit</Button.Ripple>
                                        </Link>
                                        <Button.Ripple className="mr-1 mb-1 round" outline color="danger">Delete</Button.Ripple>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Salalah</td>
                                    <td>Apartment</td>
                                    <td>YES</td>
                                    <td>
                                        <Button.Ripple className="mr-1 mb-1 round" outline color="info">Submit to Listings</Button.Ripple>
                                        <Link to="edit">
                                            <Button.Ripple className="mr-1 mb-1 round" outline color="warning">Edit</Button.Ripple>
                                        </Link>
                                        <Button.Ripple className="mr-1 mb-1 round" outline color="danger">Delete</Button.Ripple>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Salalah</td>
                                    <td>Building</td>
                                    <td>NO</td>
                                    <td>
                                        <Button.Ripple className="mr-1 mb-1 round" outline color="info">Submit to Listings</Button.Ripple>
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

export default EmptyPropertiesPage
