import React, { useState, useEffect } from "react";
import moment  from 'moment';
import { useParams } from "react-router-dom";
import randomColor from "randomcolor";
import { Table, Tag, Radio } from "antd";
import "antd/dist/antd.css";
import { postReq } from "../../api";

const DEFAULT_PAGINATION = {
  page: 1,
  limit: 10
};

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss"

const columns = [
  {
    title: "Id",
    dataIndex: "_id",
    key: "_id",
    render: (tag) => (
      <span>
        {tag}
      </span>
    ),
  },

  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    sorter: true,
    render: (datetime) => (
      <span>
        {moment(datetime).format(DATE_FORMAT)}
      </span>
    ),
  },

  {
    title: "Pressure",
    key: "pressure",
    dataIndex: "pressure",
    render: (pressures) => (
      pressures.map((onePressure, index) => (
        <span>
          <Tag color={randomColor({seed: `pressure-${index}`})} key={`pressure-${index}`}>
            {onePressure} Pa
          </Tag>
        </span>
      ))
    ),
  },


  {
    title: "Flow rate",
    key: "flow",
    dataIndex: "flow",
    render: (flows) => (
      flows.map((oneFlow, index) => (
        <span>
          <Tag color={randomColor({seed: `pressure-${index}`})} key={`pressure-${index}`}>
            {oneFlow} N/m<sup>2</sup>
          </Tag>
        </span>
      ))
    ),
  },
];

export default function Demo({socket}) {
  const [data, setData] = useState([]);
  const [createdEvent, setCreatedEvent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const { labid } = useParams();

  useEffect(() => {
    if(!socket) return;
    if(createdEvent) return;
    setCreatedEvent(true);
    socket.on("NEW_DATA", (payload) => {
      setTotal(t => t + 1);
      setData(d => {
        const newValue = [payload, ...d];
        return newValue;
      });
    });
  }, [socket]);

  const tablesParamsOnChange = (pagination, filters, sorters) => {
    // loop through the filters to construct a filter array
    let finalFilter = {};
    let sorter = "";
    // generate a filter object based on the filters entered
    for (let [key, value] of Object.entries(filters)) {
      if (value && value.length) {
        finalFilter[key] = { $in: [...value] };
      }
    }
    // generate the sorter
    const { columnKey, order } = sorters;
    if (columnKey && order) {
      sorter = order === "ascend" ? `${columnKey}` : `-${columnKey}`;
    }
    // generate pagination params
    const { current: page, pageSize: limit } = pagination;
  
    // fetch the required data
    setLoading(true);
    postReq('/filter', {
      page: page,
      limit: limit,
      filter: {
        lab: parseInt(labid),
        ...finalFilter
      },
      sorter
    })
    .then(({data:res}) => {
      setData(res.docs);
      setTotal(res.totalDocs);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false)
    })
  };


  useEffect(() => {
    setLoading(true);
    const params = {
      page: DEFAULT_PAGINATION.page,
      limit: DEFAULT_PAGINATION.limit,
      filter: {
        lab: parseInt(labid)
      },
      sorter: "-date"
    }
    console.log({params});
    postReq('/filter', params)
    .then(({data:res}) => {
      console.log({res});
      setData(res.docs);
      setTotal(res.totalDocs);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false)
    })
  }, []);


  return (
    <div>
      <h2 style={{textAlign: "center"}}>
        Live Data View
      </h2>
      <Table
        columns={columns}
        pagination={{
          defaultCurrent: 1,
          total: total,
        }}
        onChange={tablesParamsOnChange}
        dataSource={data}
        loading={loading}
      />
    </div>
  );
}
