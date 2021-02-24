import React from "react";

const Bug = ({ bug }) => {
  return (
    <tr>
      <td>{bug._id}</td>
      <td>{bug.title}</td>
      <td>{bug.status}</td>
      <td>{bug.description}</td>
      <td>{bug.project}</td>
      <td>{bug.createdAt}</td>
      <td>
        <button type="submit">Delete</button>
      </td>
    </tr>
  );
};

export default Bug;
