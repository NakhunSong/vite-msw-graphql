import { gql, useMutation } from '@apollo/client';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

const LOG_IN = gql`
  mutation Login($username: String!) {
    user(username: $username) {
      username
    }
  }
`;

function App() {
  const [username, setUsername] = useState('');
  const [logIn, { data, loading, error }] = useMutation(LOG_IN, {
    variables: {
      username,
    },
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    logIn({
      variables: {
        username,
      },
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error while fetching the user data ({error.message})</p>;
  }

  if (data) {
    return <span data-testid="username">{data.user.username}</span>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
