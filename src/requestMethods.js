import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGFjZTVmODc5ZjIxZWYyMjk2N2YxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjkyNTU2MCwiZXhwIjoxNjgzMTg0NzYwfQ.gTxKYwYE9QyZO4FS2-CsDb44YKLiqXYVC_tizLWS1WM";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;   
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})