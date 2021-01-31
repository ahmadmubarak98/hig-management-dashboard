import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Search, Inbox, Camera } from "react-feather"
import { Link } from "react-router-dom"

const countries = ["Oman", "United Arab Emirates", "Saudi Arabia"]

class AllCountriesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="All Countries"
                    breadCrumbParent="System Setup"
                    breadCrumbActive="All Countries"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/countries/create">
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
                                    <th>Country Name</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {countries.map((country, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{country}</td>
                                        <td>
                                            <Link to="/countries/edit">
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

export default AllCountriesPage
