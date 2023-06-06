import { useGraphQL } from '@api/use-graphql';
import { GetUsersDocument } from '@gql/graphql';

export default function Users() {
  const { data: usersData } = useGraphQL(GetUsersDocument);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {usersData?.users?.map((user) => {
          if (!user) return null;
          return <li key={user.id}>{user.username}</li>;
        })}
      </ul>
    </div>
  );
}
