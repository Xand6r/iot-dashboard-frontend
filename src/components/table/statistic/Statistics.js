import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "./chart";
import { postReq } from "../../../api";
import { DatePicker, Spin } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./Statistic.scss";

const { RangePicker } = DatePicker;
const DEFAULT_PAGINATION = {
	page: 1,
	limit: 10,
};

export default function Statistics({ socket }) {
	const [data, setData] = useState([]);
	const [createdEvent, setCreatedEvent] = useState(false);
	const [loading, setLoading] = useState(true);
	const { labid } = useParams();

	useEffect(() => {
		if (!socket) return;
		if (createdEvent) return;
		setCreatedEvent(true);
		socket.on("NEW_DATA", (payload) => {
			setData((d) => {
				const newValue = [payload, ...d];
				console.log(newValue);
				return newValue;
			});
		});
	}, [socket]);

	useEffect(() => {
		const filter = {
			lab: labid,
		};
		postReq("/filter", {
			page: DEFAULT_PAGINATION.page,
			limit: DEFAULT_PAGINATION.limit,
			filter,
      sorter: '-date'
		})
			.then(({ data: res }) => {
				setData(res.docs);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const onDateChange = (date) => {
		const [start, stop] = date;
		// fetch new data based on the pagination data
		const filter = {
			date: {
				$gte: start,
				$lte: stop,
			},
			lab: labid,
      sorter: '-date'
		};
		setLoading(true);
		postReq("/filter", {
			page: DEFAULT_PAGINATION.page,
			limit: DEFAULT_PAGINATION.limit,
			filter,
		})
			.then(({ data: res }) => {
				setData(res.docs);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="site-statistic-demo-card">
			<div className="range-wrapper">
				<RangePicker onChange={onDateChange} />
			</div>
			{!data.length && !loading ? (
				<h2>No data to display for this range</h2>
			) : (
				<Spin spinning={loading} tip="Loading...">
					<div className="chart-wrapper">
						<Chart data={data} dataKey={"Pressure"} />
					</div>

					<div className="chart-wrapper">
						<Chart data={data} dataKey={"flow"} />
					</div>
				</Spin>
			)}
		</div>
	);
}
