import { graphql } from 'msw';

interface LoginMutation {
  user: {
    username: string;
  };
}

interface LoginMutationVariables {
  username: string;
}

export const handlers = [
  graphql.mutation<LoginMutation, LoginMutationVariables>(
    'Login',
    (req, res, ctx) => {
      const { username } = req.variables;
      sessionStorage.setItem('is-authenticated', username);

      return res(
        ctx.data({
          user: {
            username,
          },
        })
      );
    }
  ),
];
