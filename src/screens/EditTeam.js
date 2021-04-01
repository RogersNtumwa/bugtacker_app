import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { teamDetails, updateTeam } from "../actions/team";
import { TEAM_UPDATE_RESET } from "../actions/types";

const EditTeam = ({ match, history }) => {
  const teamId = match.params.id;

  const [teamName, setTitle] = useState("");
  

  const dispatch = useDispatch();
  const teamData = useSelector((state) => state.team);
  const { loading, team } = teamData;

  const teamUpdate = useSelector((state) => state.editTeam);
  const { loading: loadingUpdate, success } = teamUpdate;

  useEffect(() => {
    if (success) {
      dispatch({ type:TEAM_UPDATE_RESET });
      history.push("/dashboard/teams");
    } else {
      if (!team.teamName || team._id !== teamId) {
        dispatch(teamDetails(teamId));
      } else {
        setTitle(team.teamName);
      }
    }
  }, [dispatch, history, team, teamId, success]);

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateTeam({
        _id: teamId,
        teamName,
      })
    );
  };

  return (
    <Fragment>
      <Container>
        <Link to="/dashboard/teams" className="btn btn-light my-3">
          Go Back
        </Link>

        <h1>Edit Team Details</h1>
        {loadingUpdate && "Update pending"}
        {loading ? (
          "loading"
        ) : (
          <Form onSubmit={onSubmitHandlerHandler}>
            <Form.Group controlId="teamName">
              <Form.Label>Team Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Team Name"
                value={teamName}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </Container>
    </Fragment>
  );
};

export default EditTeam;
