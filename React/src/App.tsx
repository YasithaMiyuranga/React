import axios from "axios";
import { useEffect, useState } from "react";

// User දත්ත වල හැඩය (Type) නිර්වචනය කිරීම
interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/userssds") // මෙහි URL එක හිතාමතා වෙනස් කර ඇත (error එක පරීක්ෂා කිරීමට)
      .then((response) => {
        setUsers(response.data);
        setError(null); // සාර්ථක නම් error එක clear කරයි
      })
      .catch((error) => {
        setError(error.message); // ප්‍රශ්නයක් වුණොත් error message එක state එකට දමයි
      });
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold">Users</h1>

      {/* Error එකක් තිබේ නම් පමණක් එය රතු පාටින් පෙන්වයි */}
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
