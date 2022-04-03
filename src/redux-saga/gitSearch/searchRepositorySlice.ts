import { createSlice } from "@reduxjs/toolkit";
import { _searchRepositoryType } from "./searchRepositoryType";

const initialState: _searchRepositoryType = {
  repositoryData: [
    {
      id: 0,
      node_id: "",
      name: "",
      full_name: "",
      private: false,
      owner: {
        login: "",
        id: 0,
      },
      html_url: "",
    },
  ],
  loading: true,
};
export const _searchRepositorySlice = createSlice({
  name: "searchuser",
  initialState,
  reducers: {
    getSearchRepository(state, actin) {},
    setSearchRepository(state, action) {
      const response = action.payload;
      state.repositoryData = response.data;
      console.log("Este es el USER DATa", state.repositoryData);

      state.loading = false;
    },
  },
});

export const { getSearchRepository, setSearchRepository } =
  _searchRepositorySlice.actions;

export default _searchRepositorySlice.reducer;
