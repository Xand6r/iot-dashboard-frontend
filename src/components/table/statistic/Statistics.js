import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { getReq } from "../../../api";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './Statistic.scss'


export default function Statistics(){
  const [state, setState] = useState({
    pMax: 0,
    fMax: 0,
    pMeam: 0,
    fMeam: 0
  });
  const { labid } = useParams();
  useEffect(() => {
    getReq('/stats/1')
    .then(({data: res}) => {
      const {
        pMax,
        fMax,
        pMeam,
        fMeam,
      } = res;
      setState({
        pMax,
        fMax,
        pMeam,
        fMeam
      });
    })
  },[]);

return(
  <div className="site-statistic-demo-card">
    <Row className="rows" gutter={16}>
      <Col span={5}>
        <Card className="statistic-demo-card">
          <Statistic
            title="Average Flow Rate"
            value={state.fMeam}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            suffix="m3/s"
          />
        </Card>
      </Col>
      <Col span={5}>
      <Card className="statistic-demo-card">
          <Statistic
            title="Average Pressure"
            value={state.pMeam}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            suffix="Pa"
          />
        </Card>
      </Col>
      <Col span={5}>
      <Card className="statistic-demo-card">
          <Statistic
            title="Maximum Flow Rate"
            value={state.fMax}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            suffix="m3/s"
          />
        </Card>
      </Col>
      <Col span={5}>
      <Card className="statistic-demo-card">
          <Statistic
            title="Maximum Pressure"
            value={state.pMax}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            suffix="Pa"
          />
        </Card>
      </Col>
    </Row>
  </div>
);
}