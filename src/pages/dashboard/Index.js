import React from "react";
import Table from "../../components/table/Table";
import Statistic from "../../components/table/statistic/Statistics";
import { getSocket } from "../../api/socket";

// import './Dashboard.scss';

export default function Index() {
    const [socket, setSocket] = React.useState(null);

    React.useEffect(() => {
        if(socket) return;
        console.log("setting");
        const newSocket = getSocket();
        setSocket(newSocket);
    }, []);

    return (
        <div>
            <Statistic socket={socket} />
            <Table socket={socket} />
        </div>
    );
}
