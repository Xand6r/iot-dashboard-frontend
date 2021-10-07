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
        {tag.slice(0, 7)}...
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
    title: "Value",
    dataIndex: "value",
    key: "value",
  },

  {
    title: "Type",
    key: "type",
    dataIndex: "type",
    filters: [
      { text: "flow", value: "flow" },
      { text: "pressure", value: "pressure" },
    ],
    render: (tag) => (
      <span>
        <Tag color={tag.length > 5 ? "geekblue" : "green"} key={tag}>
          {tag.toUpperCase()}
        </Tag>
      </span>
    ),
  },

  {
    title: "Sensor",
    dataIndex: "sensor",
    key: "sensor",
    filters: [
      { text: 1, value: 1 },
      { text: 2, value: 2 },
      { text: 3, value: 3 },
      { text: 4, value: 4 },
      { text: 5, value: 5 },
      { text: 6, value: 6 },
    ],
    render: (type) => (
      <span>
        <Tag
          color={randomColor({ seed: `${type}-1235`})}
          key={type}
          style={{
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {type}
        </Tag>
      </span>
    ),
  },
];

export default function Demo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const { labid } = useParams();

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
    postReq('/filter', {
      page: DEFAULT_PAGINATION.page,
      limit: DEFAULT_PAGINATION.limit,
      filter: {
        lab: parseInt(labid)
      }
    })
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
