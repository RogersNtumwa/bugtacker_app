import React,{useState, Fragment, useEffect} from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import {useDispatch,useSelector} from "react-redux"
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import {getTeams,deleteTeam} from "../actions/team"
import AdminSearch from '../components/AdminSearch';

const Teams = ({history, match}) => {
    
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const teamList = useSelector((state) => state.teams);
  const { loading, teams } = teamList;

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);
  
    const deleteTeamHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      dispatch(deleteTeam(id));
    }
  };
  const searched = (keyword) => (c) => c.teamName.toLowerCase().includes(keyword);
    return (
        <Container>
        <Row className="align-items-center">
          <Col>
            <h1>Team List</h1>
          </Col>
          <Col className="text-right">
            <Link to="/dashboard/newTeam">
              <Button className="my-3">
                <i className="fas fa-plus"></i> Add Team
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <AdminSearch keyword={keyword} setKeyword={setKeyword} />
        </Row>
        {loading ? (
          "loading..."
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teams.filter(searched(keyword)).map((team) => (
                <tr key={team._id}>
                  <td>{team._id}</td>
                  <td>{team.teamName}</td>
                  <td>{team.createdAt}</td>
                  <td>
                    <LinkContainer
                      to={`/dashboard/teams/${team._id}/edit`}
                    >
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteTeamHandler(team._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    )
}

export default Teams
