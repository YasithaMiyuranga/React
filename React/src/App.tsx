import axios from "axios";
import { useEffect, useState } from "react";


interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users") 
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message); 
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold">Users</h1>

      {/* Loading Indicator */}

      {isLoading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-lg">Loading users...</span>
        </div>
      )}

      {error && <p className="text-2xl font-bold text-red-600">{error}</p>}

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
