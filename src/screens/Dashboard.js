import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

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
      <Header />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
