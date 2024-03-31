import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const API = "https://api.github.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error(`Erro fetching users: ${response.statusText}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error occur...");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <h2>GitHub User List:</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <img src={user.avatar_url} alt={user.login} />
                <br />
                <div className="userDetail">
                  <h4>{user.login}</h4>
                  <a href={user.html_url}>Profile</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default App;
