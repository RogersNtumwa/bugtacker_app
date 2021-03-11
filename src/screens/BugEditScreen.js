import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form } from "react-bootstrap";

import { bugDetails, updateBug } from "../actions/bug";
import { BUG_UPDATE_RESET } from "../actions/types";

const BugEditScreen = ({ match, history }) => {
  const bugId = match.params.id;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [comments, setComments] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [addfile, setAddfile] = useState(false);
  const [attarchments, setAttarchments] = useState([]);
  const [previewattarchments, setpreviewAttarchments] = useState([]);

  const bugData = useSelector((state) => state.bug);
  const { loading, bug } = bugData;
  const bugUpdate = useSelector((state) => state.editBug);
  const { loading: loadingUpdate, success } = bugUpdate;

  useEffect(() => {
    if (success) {
      dispatch({ type: BUG_UPDATE_RESET });
      history.push("/dashboard/bugs");
    } else {
      if (!bug.data.title || bug.data._id !== bugId) {
        dispatch(bugDetails(bugId));
      } else {
        setTitle(bug.data.title);
        setProject(bug.data.project);
        setPriority(bug.data.priority);
        setStatus(bug.data.status);
        setDescription(bug.data.description);
        setCreatedBy(bug.data.createdBy);
        setCategory(bug.data.category);
        setAssignedTo(bug.data.assignedTo);
        setComments(bug.data.comments);
      }
    }
  }, [dispatch, history, bug, bugId, success]);

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBug({
        _id: bugId,
        title,
        project,
        priority,
        status,
        category,
        comments,
        createdBy,
        description,
        assignedTo,
        attarchments,
      })
    );
  };
  const onTickHandler = () => {
    setAddfile(true);
    console.log(addfile);
  };
  return (
    <Container>
      <Form onSubmit={onSubmitHandlerHandler}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Tittle</Form.Label>
            <Form.Control
              type="text"
              placeholder="Bug Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              readOnly
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Project</Form.Label>
            <Form.Control
              type="text"
              placeholder="Project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              readOnly
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            readOnly
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>New</option>
              <option>Coding</option>
              <option>In Review</option>
              <option>Branded</option>
              <option>Re-assigned</option>
              <option>Rejected</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridProject">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              type="text"
              placeholder="Priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              readOnly
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridComments">
          <Form.Label>Add Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              readOnly
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Created By</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
              readOnly
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control
              type="text"
              placeholder="Developer"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              readOnly
            />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Add attachments"
            onChange={onTickHandler}
          />
        </Form.Group>
        {addfile && (
          <Form.Group controlId="formGridComments">
            <Form.File id="custom-file" label="Custom file input" custom />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BugEditScreen;
