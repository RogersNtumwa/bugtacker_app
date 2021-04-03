import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  Image,
  Jumbotron,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import { bugDetails } from "../actions/bug";
import ImageSlider from "../components/ImageSlider";

Modal.setAppElement("#root");
const BugDetails = ({ match }) => {
  const [showModal, setShowModal] = useState(false);
  const bugData = useSelector((state) => state.bug);

  const {
    loading,
    bug: { data },
  } = bugData;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bugDetails(match.params.id));
  }, [dispatch, match]);

  const onShowHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <Fragment>
      <Container>
        <Link className="btn btn-light my-3" to="/dashboard/bugs">
          Go Back
        </Link>
        {loading ? (
          "loading Bug"
        ) : (
          <div>
            <div className="row">
              <div className="col-md-10">
                <h2>Details for Bug:({data._id}) </h2>
              </div>
              <div className="col-md-2">
                <Link
                  className="btn btn-light my-3"
                  to={`/dashboard/bugs/${data._id}/edit`}
                >
                  Edit Bug
                </Link>
              </div>
            </div>
            <Jumbotron>
              <h4 className="title">Title: {data.title}</h4>
              <p>
                <h6>Description:</h6> {data.description}.
              </p>
              <p>
                <h6>Status:</h6>
                {data.status}
              </p>
              <p>
                <h6>Priority:</h6> {data.priority}
              </p>
              <p>
                <h6>Project:</h6> {data.project}
              </p>
              <p>
                <h6>AssignedTo:</h6> {data.assignedTo}
              </p>
              <p>
                <h6>CreatedBy:</h6>
                {data.createdBy}
              </p>
              <Form>
                <Form.Row>
                  <Form.Group id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Show attachments"
                      onChange={onShowHandler}
                    />
                  </Form.Group>
                </Form.Row>
              </Form>
              <Modal isOpen={showModal} onRequestClose={onShowHandler}>
                {/* <div>
                  <p onClick={onShowHandler}>X</p>
                </div> */}
                <ImageSlider data={data.attachments} />
              </Modal>
            </Jumbotron>
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default BugDetails;
