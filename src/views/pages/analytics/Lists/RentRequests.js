import React from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    Table,
    UncontrolledTooltip,
    Progress
} from "reactstrap"
import avatar1 from "../../../../assets/img/portrait/small/avatar-s-5.jpg"
import avatar2 from "../../../../assets/img/portrait/small/avatar-s-7.jpg"
import avatar3 from "../../../../assets/img/portrait/small/avatar-s-10.jpg"
import avatar4 from "../../../../assets/img/portrait/small/avatar-s-8.jpg"
import avatar5 from "../../../../assets/img/portrait/small/avatar-s-1.jpg"
import avatar6 from "../../../../assets/img/portrait/small/avatar-s-2.jpg"
import avatar7 from "../../../../assets/img/portrait/small/avatar-s-3.jpg"
import avatar8 from "../../../../assets/img/portrait/small/avatar-s-4.jpg"

class RentRequests extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Latest Rent Requests</CardTitle>
                </CardHeader>
                <Table
                    responsive
                    className="dashboard-table table-hover-animation mb-0 mt-1"
                >
                    <thead>
                        <tr>
                            <th>Request NO.</th>
                            <th>STATUS</th>
                            <th>TENANT</th>
                            <th>PROPERTY LOCATION</th>
                            <th>DISTANCE</th>
                            <th>MOVE-IN DATE</th>
                            <th>EST LEAVE. DT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#879985</td>
                            <td>
                                <div
                                    className="bg-success"
                                    style={{
                                        height: "10px",
                                        width: "10px",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        marginRight: "5px"
                                    }}
                                />
                                <span>Moving-In</span>
                            </td>
                            <td className="p-1">
                                <span>Saad Al-Jabari</span>
                            </td>
                            <td>Salalah, Test Street 23, Second Floor, Right</td>
                            <td>
                                <span>130 km</span>
                                <Progress className="mb-0 mt-1" color="success" value="80" />
                            </td>
                            <td>14:58 26/07/2018</td>
                            <td>28/07/2018</td>
                        </tr>
                        <tr>
                            <td>#156897</td>
                            <td>
                                <div
                                    className="bg-warning"
                                    style={{
                                        height: "10px",
                                        width: "10px",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        marginRight: "5px"
                                    }}
                                />
                                <span>Pending</span>
                            </td>
                            <td className="p-1">
                                <span>Ahmad S. Mubarak</span>
                            </td>
                            <td>Cordova, Alaska </td>
                            <td>
                                <span>234 km</span>
                                <Progress className="mb-0 mt-1" color="warning" value="60" />
                            </td>
                            <td>14:58 26/07/2018 </td>
                            <td>28/07/2018</td>
                        </tr>
                        <tr>
                            <td>#568975</td>
                            <td>
                                <div
                                    className="bg-success"
                                    style={{
                                        height: "10px",
                                        width: "10px",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        marginRight: "5px"
                                    }}
                                />
                                <span>Moving-In</span>
                            </td>
                            <td className="p-1">
                                <span>Mohammad Hamdan</span>
                            </td>
                            <td>Florence, Alabama </td>
                            <td>
                                <span>168 km</span>
                                <Progress className="mb-0 mt-1" color="success" value="70" />
                            </td>
                            <td>14:58 26/07/2018 </td>
                            <td>28/07/2018</td>
                        </tr>
                        <tr>
                            <td>#245689</td>
                            <td>
                                <div
                                    className="bg-danger"
                                    style={{
                                        height: "10px",
                                        width: "10px",
                                        borderRadius: "50%",
                                        display: "inline-block",
                                        marginRight: "5px"
                                    }}
                                />
                                <span>Canceled</span>
                            </td>
                            <td className="p-1">
                                <span>Omar Abdeen</span>
                            </td>
                            <td>Clifton, Arizona </td>
                            <td>
                                <span>125 km</span>
                                <Progress className="mb-0 mt-1" color="danger" value="90" />
                            </td>
                            <td>14:58 26/07/2018 </td>
                            <td>28/07/2018</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        )
    }
}
export default RentRequests
