import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { bugDetails, updateBug } from "../actions/bug";
import { BUG_UPDATE_RESET } from "../actions/types";

const ProductEditScreen = ({ match, history }) => {
  const bugId = match.params.id;
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [project, setProject] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const bugdata = useSelector((state) => state.bug);
  const { loading, bug } = bugdata;

  const bugupdate = useSelector((state) => state.editBug);
  const { loading: loadingUpdate, success } = bugupdate;

  useEffect(() => {
    if (success) {
      dispatch({ type: BUG_UPDATE_RESET });
      history.push("/dashboard/bugs");
    } else {
      if (!bug.data.title || bug.data._id !== bugId) {
        dispatch(bugDetails(bugId));
      } else {
        setTitle(bug.data.title);
        setStatus(bug.data.status);
        setDescription(bug.data.description);
        setPriority(bug.data.priority);
        setProject(bug.data.project);
        setCategory(bug.data.category);
      }
    }
  }, [dispatch, history, bug.data, bugId, success]);

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBug({
        _id: bugId,
        title,
        status,
        description,
        priority,
        project,
        category,
      })
    );
  };

  return (
    <Fragment>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Bug</h1>
        {loadingUpdate && "Update pending"}
        {loading ? (
          "loading"
        ) : (
          <Form onSubmit={onSubmitHandlerHandler}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="Priority">
              <Form.Label>Priority</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Bug Priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="project">
              <Form.Label>Project</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product Project"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Product category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </Fragment>
  );
};

export default ProductEditScreen;
