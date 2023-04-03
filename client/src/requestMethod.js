import axios from "axios"

const BASE_URL = "http://localhost:4001/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGFlNDQxMmI1ZmNlNTQ0ZjA0ZTBlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjY4OTUwMywiZXhwIjoxNjY2OTQ4NzAzfQ.r-geXL4DO91CGZAp9ftXWWExm7IAMyvKb1iUAlAITmE"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token:`Bearer ${TOKEN}` }
})