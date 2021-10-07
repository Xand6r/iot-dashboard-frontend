import React from 'react';
import { List, Avatar } from 'antd';
import './List.scss';
import { Link } from "react-router-dom";

const INITIAL_DATA = [
  {
    name: "Lab 1",
    title: "Check out the details of your lab here."
  },
  {
    name: "Lab 2",
    title: "Check out the details of your lab here."
  },
  {
    name: "Lab 3",
    title: "Check out the details of your lab here."
  },
  {
    name: "Lab 4",
    title: "Check out the details of your lab here."
  },
  {
    name: "Lab 5",
    title: "Check out the details of your lab here."
  },
];

export default class InfiniteListExample extends React.Component {
  state = {
    data: INITIAL_DATA
  };

  render() {
    return (
      <div className="demo-infinite-container">
          <List
            className="demo-infinite"
            dataSource={this.state.data}
            renderItem={(item, index) => (
              <Link to={`/dashboard/${index + 1}`}>
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.name}</a>}
                  description={item.title}
                />
              </List.Item>
              </Link>
            )}
          >
          </List>
      </div>
    );
  }
}