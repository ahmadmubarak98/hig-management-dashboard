import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Chart from "react-apexcharts"

class ApexBarCharts extends React.Component {
  state = {
    options: {
      colors: ["#161c30"],
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Muscat",
          "Salalah",
          "Seeb",
          "Sohar",
          "Nizwa",
          "Khasab",
          "Sur",
          "Bahla"
        ],
        tickAmount: 5
      }
    },
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100]
      }
    ]
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Leased Properties By City</CardTitle>
        </CardHeader>
        <CardBody>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </CardBody>
      </Card>
    )
  }
}
export default ApexBarCharts
