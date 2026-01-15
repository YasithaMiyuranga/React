import React from "react";
import { Link } from "react-router";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4];
  return (
    <div className="container mt-4">
      <h1>Profiles</h1>
      <ul className="list-group">
        {profiles.map((profile) => (
          <Link
            to={`/profiles/${profile}`}
            key={profile}
            className="list-group-item"
          >
            Profile {profile}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProfilesPage;
