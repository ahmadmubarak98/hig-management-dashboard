import React from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    Table
} from "reactstrap"

class PropertiesEmptySoon extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Properties To Be Empty Soon</CardTitle>
                </CardHeader>
                <Table
                    responsive
                    className="dashboard-table table-hover-animation mb-0 mt-1"
                >
                    <thead>
                        <tr>
                            <th>Property NO.</th>
                            <th>PROPERTY LOCATION</th>
                            <th>EMPTY SINCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#879985</td>
                            <td>Salalah, Test Street 23, Second Floor, Right</td>
                            <td>28/07/2018</td>
                        </tr>
                        <tr>
                            <td>#872242</td>
                            <td>Salalah, Test Street 23, Second Floor, Right</td>
                            <td>28/07/2018</td>
                        </tr>
                        <tr>
                            <td>#875931</td>
                            <td>Salalah, Test Street 23, Second Floor, Right</td>
                            <td>28/07/2018</td>
                        </tr>
                        <tr>
                            <td>#245945</td>
                            <td>Salalah, Test Street 23, Second Floor, Right</td>
                            <td>28/07/2018</td>
                        </tr>
                        <tr>
                            <td>#712919</td>
                            <td>Salalah, Test Street 23, Second Floor, Right</td>
                            <td>28/07/2018</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        )
    }
}
export default PropertiesEmptySoon
