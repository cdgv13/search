export interface owner {
  login: string;
  id: number;
}
export interface repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: owner;
  html_url: string;
}

export type _searchRepositoryType = {
  repositoryData: repository[];
  loading: boolean;
};
