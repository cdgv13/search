import { createSlice } from "@reduxjs/toolkit";
import { _searchUserType } from "./searchUserType";

const initialState: _searchUserType = {
  userData: {
    login: "",
    id: 0,
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: "",
    node_id: "",
    gists_url: "",
    starred_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: null,
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_gists: 0,
  },
  loading: true,
};
export const _searchUserSlice = createSlice({
  name: "searchuser",
  initialState,
  reducers: {
    getSearchUser(state, actin) {},
    setSearchUser(state, action) {
      const response = action.payload;
      console.log("Este es el slice", response.data);
      state.userData = response.data;
      console.log("Este es el USER DATa", state.userData);

      state.loading = false;
    },
  },
});

export const { getSearchUser, setSearchUser } = _searchUserSlice.actions;

export default _searchUserSlice.reducer;
