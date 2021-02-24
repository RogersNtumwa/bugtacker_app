import React, { useState, useEffect, useRef } from "react";

import { BugList } from "../actions/bug";
import { useDispatch, useSelector } from "react-redux";
import Bug from "../components/Bug";

const Bugs = ({ match }) => {
  const [bugList, setBugList] = useState([]);
  const [bugNumber, setBugNumbert] = useState(0);
  const [page, setPage] = useState(1);

  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const bugsList = useSelector((state) => state.bugs);

  const { bugs, loading } = bugsList;

  useEffect(() => {
    dispatch(BugList(keyword, page));
    if (!loading) {
      const { bugs: AllBugs } = bugs.data;
      setBugList(AllBugs);
      setBugNumbert(bugs.count);
    }
  }, [dispatch, page]);

  return (
    <div>
      <h1>Bug screen</h1>
      {loading ? (
        "loading"
      ) : (
        <div>
          <table style={{ width: "100%" }}>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>status</th>
              <th>Description</th>
              <th>Project</th>
              <th>Report Date</th>
            </tr>

            {bugList.map((bug) => (
              <Bug bug={bug} key={bug._id} />
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Bugs;
