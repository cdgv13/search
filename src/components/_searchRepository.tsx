import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSearchRepository } from "../redux-saga/gitSearch/searchRepositorySlice";
import { RootState } from "../redux-saga/_rootReducer";
import "./_search.css";

const _searchRepository = () => {
  const dispatch = useDispatch();
  const [repository, setRepository] = useState("");
  const { repositoryData } = useSelector(
    (state: RootState) => state.searchRepository
  );

  const _takeName = () => {
    dispatch(getSearchRepository({ repository: repository }));
  };

  return (
    <Container style={{ flex: 1 }}>
      <Container style={{ justifyContent: "center" }}>
        <Row style={{}}>
          <input
            style={{ width: "50%" }}
            value={repository}
            placeholder="Búsqueda por Nombre o Empresa"
            onChange={(user) => setRepository(user.target.value)}
          />
          <Button onClick={() => _takeName()}>Search</Button>
        </Row>
      </Container>
      <div>
        {repositoryData[0].name !== "" ? (
          <table className="table table-striped">
            {repositoryData.map((repo: any, index: number) => (
              <thead className="table-titles" key={repo.id}>
                <tr className="index">
                  <th scope="row">Index Count</th>
                  <td>{index}</td>
                </tr>
                <tr>
                  <th scope="row">ID</th>
                  <td>{repo.id}</td>
                </tr>
                <tr>
                  <th scope="row">node_id</th>
                  <td>{repo.node_id}</td>
                </tr>
                <tr>
                  <th scope="row">name</th>
                  <td>{repo.name}</td>
                </tr>
                <tr>
                  <th scope="row">private</th>
                  <td>{repo.private}</td>
                </tr>

                <tr>
                  <th scope="row">owner</th>
                  <td>
                    {" "}
                    User {repo.owner.login} with ID {repo.owner.id}
                  </td>
                </tr>
                <tr>
                  <th scope="row">html_url</th>
                  <td>{repo.html_url}</td>
                </tr>
              </thead>
            ))}
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

export default _searchRepository;
