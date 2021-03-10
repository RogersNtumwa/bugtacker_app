import React, { useState, useEffect, useRef } from "react";

import { BugList } from "../actions/bug";
import { useDispatch, useSelector } from "react-redux";
import Bug from "../components/Bug";
import { Table } from "react-bootstrap";

const Bugs = ({ match }) => {
  const page_number = 1;
  const [bugList, setBugList] = useState([]);
  const [page, setPage] = useState(page_number);

  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const bugsList = useSelector((state) => state.bugs);

  const { bugs, loading } = bugsList;

  useEffect(() => {
    dispatch(BugList(keyword, page));
  }, [dispatch, page]);

  useEffect(() => {
    if (!loading) {
      setBugList((prev) => [...prev, ...bugs.data.bugs]);
    }
  }, [bugs]);

  const scrollToEnd = () => {
    setPage((page) => page + 1);
  };
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <Table bordered responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>status</th>
              <th>Description</th>
              <th>Project</th>
              <th>Report Date</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {bugList.map((bug) => (
              <Bug bug={bug} key={bug._id} />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Bugs;
