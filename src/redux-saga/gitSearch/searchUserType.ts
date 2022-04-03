export interface user {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  node_id: string;
  gists_url: string;
  starred_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
  name: null;
  company: null;
  blog: string;
  location: null;
  email: null;
  hireable: null;
  bio: null;
  twitter_username: null;
  public_gists: 0;
}

export type _searchUserType = {
  userData: user;
  loading: boolean;
};
