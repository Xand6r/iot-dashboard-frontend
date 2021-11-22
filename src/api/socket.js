import io from "socket.io-client";
import { URL } from './index';


export const getSocket = (userId) => io(URL);

