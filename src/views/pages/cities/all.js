import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Search, Inbox, Camera } from "react-feather"
import { Link } from "react-router-dom"

const cities = [
    {
        name: "muscat",
        country: "Oman"
    },
    {
        name: "Salalah",
        country: "Oman"
    },
    {
        name: "Dubai",
        country: "United Arab Emirates"
    },
    {
        name: "Abu Dhabi",
        country: "United Arab Emirates"
    },
    {
        name: "Riyadh",
        country: "Saudi Arabia"
    },

    {
        name: "Jeddah",
        country: "Saudi Arabia"
    },
]

class AllCitiesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="All Cities"
                    breadCrumbParent="System Setup"
                    breadCrumbActive="All Cities"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/cities/create">
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
                                    <th>City Name</th>
                                    <th>Country</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cities.map((city, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{city.name}</td>
                                        <td>{city.country}</td>
                                        <td>
                                            <Link to="/cities/edit">
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

export default AllCitiesPage
