import axios from "axios";

const _searchRepositoryRequest = async (message: any) =>
  axios.get<any>("https://api.github.com" + message);

export default _searchRepositoryRequest;
