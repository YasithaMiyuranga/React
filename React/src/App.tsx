import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "./services/api-client";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await apiClient.get<User[]>("/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError((error as AxiosError).message);
        // alert((error as AxiosError).message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = (user: User) => {
    const oldUsers = [...users];
    setUsers(users.filter((newUser) => newUser.id !== user.id));

    apiClient.delete(`/users/${user.id}`).catch((error) => {
      setError((error as AxiosError).message);
      setUsers(oldUsers);
    });
  };

  const updateUser = (user: User) => {
    const oldUsers = [...users];
    const updatedUser = { ...user, name: user.name + " updated" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.patch(`/users/${user.id}`).catch((error) => {
      setError((error as AxiosError).message);
      setUsers(oldUsers);
    });
  };

  const createNewUser = () => {
    const oldUsers = [...users];
    const newUser = { id: 0, name: "Harshana" };
    setUsers([newUser, ...users]);

    apiClient
      .post("/users", newUser)
      .then((response) => setUsers([response.data, ...users]))
      .catch((error) => {
        setError((error as AxiosError).message);
        setUsers(oldUsers);
      });
  };

  return (
    <div className="container mt-4">
      {loading && <div className="spinner-border"></div>}
      {error && <p className="text-danger font-weight-bold">{error}</p>}
      <button className="btn btn-primary" onClick={createNewUser}>
        Create new user
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
