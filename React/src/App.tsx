import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      // console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li className="text-2xl font-bold" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
