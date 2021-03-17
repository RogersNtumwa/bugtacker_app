import React, { useState, useEffect, Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createBug } from "../actions/bug";
import { getProjects } from "../actions/project";

const AddBug = ({ history }) => {
  const [formData, setformData] = useState({});

  const [images, setImages] = useState([]);
  const [previeImages, setpreviewImages] = useState([]);
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
  const projectList = useSelector((state) => state.projects);
  const { loading, projects } = projectList;

  const bugReducer = useSelector((state) => state.addBug);
  const { success } = bugReducer;

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();

    formData.images = images;
    console.log(formData);
    dispatch(createBug(formData));

    // // redirecting not working fine yet
    success && history.push("/dasboard/bugs");
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onTickHandler = () => {
    setAddfile(!addfile);
  };

  const onchangeimage = (e) => {
    const files = Array.from(e.target.files);
    setpreviewImages([]);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setpreviewImages((oldArray) => [...oldArray, reader.result]);
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        "Loading Dependencies"
      ) : (
        <Container>
          <Form onSubmit={onSubmitHandlerHandler}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tittle</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Bug Title"
                  value={title}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="category">
                <Form.Label>Select Project</Form.Label>
                <Form.Control
                  as="select"
                  name="project"
                  value={project}
                  onChange={handleChange}
                >
                  <Fragment>
                    <option>Select Project</option>
                    {projects.data.map((project) => (
                      <option key={project._id} value={project._id}>
                        {project.title}
                      </option>
                    ))}
                  </Fragment>
                </Form.Control>
              </Form.Group>
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

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Assigned To</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Developer"
                  value={assignedTo}
                  name="assignedTo"
                  onChange={handleChange}
                />
              </Form.Group>
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
                {previeImages.map((image) => (
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
      )}
    </div>
  );
};

export default AddBug;
