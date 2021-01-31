import React from "react"
import StatisticsCard from "../../components/@vuexy/statisticsCard/StatisticsCard"
import { Users, Package, Home as HomeIcon, Key, AlertTriangle } from "react-feather"
import { Row, Col } from "reactstrap"
import "../../assets/scss/pages/dashboard-analytics.scss"
import {
  totalProperties,
  totalPropertiesSeries,
  totalLeasedProperties,
  totalLeasedPropertiesSeries,
  totalEmptyProperties,
  totalEmptyPropertiesSeries
} from "../../data/StatisticsData"
import ApexBarCharts from "./analytics/ApexBarCharts"
import ApexPieCharts from "./analytics/ApexPieCharts"
import ApexDonutCharts from "./analytics/ApexDonutCharts"
import ApexLineCharts from "./analytics/ApexLineCharts"
import RentRequests from "./analytics/Lists/RentRequests"
import PropertiesEmptySoon from "./analytics/Lists/PropertiesEmptySoon"
import ScheduledVisits from "./analytics/Lists/ScheduledVisits"

let $primary = "#161c30",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="3" md="6" sm="12">
            <StatisticsCard
              icon={<HomeIcon className="primary" size={22} />}
              stat="1.5K"
              statTitle="Total Available Properties"
              options={totalProperties}
              series={totalPropertiesSeries}
              type="area"
            />
          </Col>
          <Col lg="3" md="6" sm="12">
            <StatisticsCard
              icon={<Key className="warning" size={22} />}
              iconBg="warning"
              stat="97.5K"
              statTitle="Total Currently Leased Properties"
              options={totalLeasedProperties}
              series={totalLeasedPropertiesSeries}
              type="area"
            />
          </Col>
          <Col lg="3" md="6" sm="12">
            <StatisticsCard
              icon={<AlertTriangle className="danger" size={22} />}
              stat="1.5K"
              statTitle="Total Empty Properties"
              options={totalEmptyProperties}
              series={totalEmptyPropertiesSeries}
              type="area"
            />
          </Col>
          <Col lg="3" md="6" sm="12">
            <StatisticsCard
              icon={<AlertTriangle className="danger" size={22} />}
              stat="23"
              statTitle="Due Payments"
              options={totalEmptyProperties}
              series={totalEmptyPropertiesSeries}
              type="area"
            />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="12" md="12" sm="12">
            <RentRequests />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="6" md="6" sm="12">
            <ScheduledVisits />
          </Col>
          <Col lg="6" md="6" sm="12">
            <PropertiesEmptySoon />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="6" md="12" sm="12">
            <ApexLineCharts />
          </Col>
          <Col lg="6" md="12" sm="12">
            <ApexDonutCharts />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="6" md="12" sm="12">
            <ApexBarCharts />
          </Col>
          <Col lg="6" md="12" sm="12">
            <ApexPieCharts />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Home