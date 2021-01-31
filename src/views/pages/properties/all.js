import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Search, Inbox, Camera } from "react-feather"
import { Link } from "react-router-dom"
import SubmitListingModal from "./SubmitListingModal"

class AllPropertiesPage extends React.Component {
    state = {
        modalActive: false
    }

    toggleModal = () => {
        this.setState(prevState => ({
            modalActive: !prevState.modalActive
        }))
    }

    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="All Properties"
                    breadCrumbParent="Properties"
                    breadCrumbActive="All Properties"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/properties/create">
                            <Button.Ripple className="mr-1 mb-1 bg-gradient-primary" color="none">CREATE NEW</Button.Ripple>
                        </Link>
                    </Col>
                </Row>
                <SubmitListingModal setModalActive={this.toggleModal} isModalActive={this.state.modalActive} />
                <Row>
                    <Col sm="12">
                        <Table responsive>
                            <thead className="thead-dark">
                                <tr>
                                    <th># NO.</th>
                                    <th>Property Location</th>
                                    <th>Property Type</th>
                                    <th>STATUS</th>
                                    <th>LISTED</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Salalah</td>
                                    <td>Building</td>
                                    <td>
                                        <Badge color="success">LEASED</Badge>
                                    </td>
                                    <td>NO</td>
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
                                    <td>Apartment</td>
                                    <td>
                                        {/* <Badge color="info">Info</Badge> */}
                                        <Badge color="danger">Empty</Badge>
                                        {/* <Badge color="warning">Empty</Badge> */}
                                    </td>
                                    <td>YES</td>
                                    <td>
                                        <Button.Ripple onClick={() => this.toggleModal()} className="mr-1 mb-1 round" outline color="info">Publish in website</Button.Ripple>
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
                                    <td>
                                        <Badge color="warning">MAINTENANCE</Badge>
                                    </td>
                                    <td>NO</td>
                                    <td>
                                        <Button.Ripple onClick={() => this.toggleModal()} className="mr-1 mb-1 round" outline color="info">Publish in website</Button.Ripple>
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

export default AllPropertiesPage
