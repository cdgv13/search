import axios from "axios";

const _searchUserRequest = async (message: any) =>
  axios.get<any>("https://api.github.com" + message);

export default _searchUserRequest;
