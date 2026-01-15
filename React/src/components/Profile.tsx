import React from "react";
import { Link, useParams } from "react-router";

const Profile = () => {
  const params = useParams();

  return (
    <div className="container mt-4">
      <h1>Profile {params.id}</h1>
      <Link to={"/profiles"}>Back</Link>
    </div>
  );
};

export default Profile;
