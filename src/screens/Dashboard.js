import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Dashboard = ({ history }) => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  useEffect(() => {
    if (!isAuthenticated) {
      return history.push("/");
    }
  }, [isAuthenticated, history]);
  return (
    <div>
      <h1>Welicome to My Dashboard</h1>
    </div>
  );
};

export default Dashboard;
