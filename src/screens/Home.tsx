import {users} from "../db";
import {Link, useSearchParams} from "react-router-dom";

export default function Home() {
  const [ readSearchParams, setSearchParams ] = useSearchParams();
  console.log(readSearchParams.has('geo'))

  // setTimeout(() => {
  //   setSearchParams({
  //     day: 'today',
  //     tomorrow: '123'
  //   })
  // }, 3000)


  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}> {user.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
