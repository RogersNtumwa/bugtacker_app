import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createBug } from "../actions/bug";

import ShowProjects from "../components/ShowProjects";
import ShowUsers from "../components/ShowUsers";
import Alert from "../components/Alert";

const AddBug = ({ history }) => {
  const [formData, setformData] = useState({});

  const [attachments, setAttachments] = useState([]);
  const [previewAttachments, setpreviewAttachments] = useState([]);
  const [addfile, setAddfile] = useState(false);

  const {
    title,
    description,
    category,
    priority,
    project,
    status,
    assignedTo,
  } = formData;

  const dispatch = useDispatch();

  const bugReducer = useSelector((state) => state.addBug);
  const { success } = bugReducer;

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    formData.attachments = attachments;
    dispatch(createBug(formData));
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onTickHandler = () => {
    setAddfile(!addfile);
  };

  const onchangeimage = (e) => {
    const files = Array.from(e.target.files);
    setpreviewAttachments([]);
    setAttachments([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setpreviewAttachments((oldArray) => [...oldArray, reader.result]);
          setAttachments((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (success) {
      return history.push("/dashboard/bugs");
    }
  }, [success, history]);

  return (
    <Container>
      <Alert />
      <Form onSubmit={onSubmitHandlerHandler} encType="multipart/form-data">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Tittle</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Bug Title"
              value={title}
              onChange={handleChange}
            />
          </Form.Group>
          <ShowProjects project={project} handleChange={handleChange} />
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              onChange={handleChange}
              defaultValue="Choose..."
            >
              <option>{status}</option>
              <option value="New">New</option>
              <option value="Coding">Coding</option>
              <option value="In Reveiw">In Review</option>
              <option value="Branded">Branded</option>
              <option value="Re-assigned">Re-assigned</option>
              <option value="Rejected">Rejected</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridProject">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              placeholder="Priority"
              name="priority"
              value={priority}
              onChange={handleChange}
            >
              <option>Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Category"
              name="category"
              value={category}
              onChange={handleChange}
            />
          </Form.Group>
          <ShowUsers
            assignedTo={assignedTo}
            handleChange={handleChange}
            label="Assign To Developer"
            field="assignedTo"
          />
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Add attachments"
            onChange={onTickHandler}
          />
        </Form.Group>
        {addfile && (
          <Form.Group controlId="formGridComments">
            <Form.File
              id="custom-file"
              label="Custom file input"
              custom
              onChange={onchangeimage}
              multiple
            />
            {previewAttachments.map((image) => (
              <img
                src={image}
                key={image}
                alt="previewimage"
                className="mt-3 mr-2"
                height="52"
                width="55"
              />
            ))}
          </Form.Group>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddBug;
