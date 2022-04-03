import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSearchUser } from "../redux-saga/gitSearch/searchUserSlice";
import { RootState } from "../redux-saga/_rootReducer";
import "./_search.css";
const _searchUser = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const { userData } = useSelector((state: RootState) => state.searchUser);

  const _takeName = () => {
    dispatch(getSearchUser({ user: user }));
  };
  useEffect(() => {
    console.log("LOG USER", userData);
  }, []);
  console.log("LOG USER");

  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ justifyContent: "center" }}>
        <Row style={{}}>
          <input
            style={{ width: "50%" }}
            value={user}
            placeholder="Búsqueda por Nombre o Empresa"
            onChange={(user) => setUser(user.target.value)}
          />
          <Button onClick={() => _takeName()}>Search</Button>
        </Row>
      </Container>
      <div>
        {userData.login !== "" ? (
          <table className="table table-striped">
            <thead className="table-titles">
              <tr>
                <th scope="row">Login</th>
                <td>{userData.login}</td>
              </tr>
              <tr>
                <th scope="row">ID</th>
                <td>{userData.id}</td>
              </tr>
              <tr>
                <th scope="row">node_id</th>
                <td>{userData.node_id}</td>
              </tr>
              <tr>
                <th scope="row">avatar_url</th>
                <td>{userData.avatar_url}</td>
              </tr>

              <tr>
                <th scope="row">gravatar_id</th>
                <td>{userData.gravatar_id}</td>
              </tr>

              <tr>
                <th scope="row">url</th>
                <td>{userData.url}</td>
              </tr>

              <tr>
                <th scope="row">html_url</th>
                <td>{userData.html_url}</td>
              </tr>

              <tr>
                <th scope="row">followers_url</th>
                <td>{userData.followers_url}</td>
              </tr>

              <tr>
                <th scope="row">following_url</th>
                <td>{userData.following_url}</td>
              </tr>

              <tr>
                <th scope="row">gists_url</th>
                <td>{userData.gists_url}</td>
              </tr>

              <tr>
                <th scope="row">starred_url</th>
                <td>{userData.starred_url}</td>
              </tr>

              <tr>
                <th scope="row">subscriptions_url</th>
                <td>{userData.subscriptions_url}</td>
              </tr>

              <tr>
                <th scope="row">organizations_url</th>
                <td>{userData.organizations_url}</td>
              </tr>

              <tr>
                <th scope="row">repos_url</th>
                <td>{userData.repos_url}</td>
              </tr>

              <tr>
                <th scope="row">events_url</th>
                <td>{userData.events_url}</td>
              </tr>

              <tr>
                <th scope="row">received_events_url</th>
                <td>{userData.received_events_url}</td>
              </tr>

              <tr>
                <th scope="row">type</th>
                <td>{userData.type}</td>
              </tr>

              <tr>
                <th scope="row">site_admin</th>
                <td>{userData.site_admin}</td>
              </tr>

              <tr>
                <th scope="row">name</th>
                <td>{userData.name}</td>
              </tr>

              <tr>
                <th scope="row">company</th>
                <td>{userData.company}</td>
              </tr>

              <tr>
                <th scope="row">blog</th>
                <td>{userData.blog}</td>
              </tr>

              <tr>
                <th scope="row">location</th>
                <td>{userData.location}</td>
              </tr>

              <tr>
                <th scope="row">email</th>
                <td>{userData.email}</td>
              </tr>

              <tr>
                <th scope="row">hireable</th>
                <td>{userData.hireable}</td>
              </tr>

              <tr>
                <th scope="row">bio</th>
                <td>{userData.bio}</td>
              </tr>

              <tr>
                <th scope="row">twitter_username</th>
                <td>{userData.twitter_username}</td>
              </tr>

              <tr>
                <th scope="row">public_repos</th>
                <td>{userData.public_repos}</td>
              </tr>

              <tr>
                <th scope="row">public_gists</th>
                <td>{userData.public_gists}</td>
              </tr>

              <tr>
                <th scope="row">followers</th>
                <td>{userData.followers}</td>
              </tr>

              <tr>
                <th scope="row">following</th>
                <td>{userData.following}</td>
              </tr>

              <tr>
                <th scope="row">create_at</th>
                <td>{userData.created_at}</td>
              </tr>

              <tr>
                <th scope="row">updated_at</th>
                <td>{userData.updated_at}</td>
              </tr>
            </thead>
          </table>
        ) : (
          <Container style={{ alignSelf: "center" }}>
            No existen Datos
          </Container>
        )}
      </div>
    </Container>
  );
};

export default _searchUser;
