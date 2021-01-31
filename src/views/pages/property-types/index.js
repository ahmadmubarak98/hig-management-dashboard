import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { Row, Col, Table, Button, Badge } from "reactstrap"
import { Search, Inbox, Camera } from "react-feather"
import { Link } from "react-router-dom"

const propertyTypes = [
    {
        name: "Office",
    },
    {
        name: "Apartment",
    },
    {
        name: "Building",
    },
    {
        name: "Warehouse",
    },
    {
        name: "Resedential Complex",
    },
]

class PropertyTypesPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs
                    breadCrumbTitle="All Property Types"
                    breadCrumbParent="System Setup"
                    breadCrumbActive="All Property Types"
                />
                <Row className='mb-2'>
                    <Col lg="12" md="12" sm="12">
                        <Link to="/property-types/create">
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
                                    <th>Type name</th>
                                    <th>OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {propertyTypes.map((propertyType, i) => (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{propertyType.name}</td>
                                        <td>
                                            <Link to="/property-types/edit">
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

export default PropertyTypesPage
