import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";
import "../json files/ml_model.json"
import "../json files/final_data.json"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample2,
  chartExample3,
} from "../variables/charts.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }



  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {

    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Real VS Predicted</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Premium Vs Expected Cost</h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Overall Statistics</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>PROFIT</th>
                        <th>TOTAL COST</th>
                        <th>TOTAL EARNINGS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>56.2%</td>
                        <td>$1012519</td>
                        <td>$158138</td>

                      </tr>
                      {/* <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">$23,789</td>
                      </tr> */}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Risk diversification</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Index</th>
                        <th>POOL 1</th>
                        <th>POOL 2</th>
                        <th>POOL 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>0.19047619047619047</td>
                        <td>0.3888888888888889</td>
                        <td>0.2698412698412698</td>

                      </tr>
                      <tr>
                        <td>2</td>
                        <td>0.2857142857142857</td>
                        <td>0.333333333333333</td>
                        <td>0.20634920634920634</td>

                      </tr>
                      <tr>
                        <td>3</td>
                        <td>0.3333333333333333</td>
                        <td>0.111111111111111</td>
                        <td>0.23809523809523808</td>

                      </tr>
                      <tr>
                        <td>4</td>
                        <td>0.09523809523809523</td>
                        <td>0.05555555555555555</td>
                        <td>0.20634920634920634</td>

                      </tr>
                      <tr>
                        <td>5</td>
                        <td>0.09523809523809523</td>
                        <td>0.1111111111111111</td>
                        <td>0.07936507936507936</td>

                      </tr>
                      {/* <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">$23,789</td>
                      </tr> */}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div >
      </>
    );
  }
}

export default Dashboard;
