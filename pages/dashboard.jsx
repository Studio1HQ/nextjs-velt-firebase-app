import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { withAuth } from "@/utils/withAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default withAuth(Dashboard);
