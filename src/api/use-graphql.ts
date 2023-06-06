import request from 'graphql-request';
import { type TypedDocumentNode } from '@graphql-typed-document-node/core';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): UseQueryResult<TResult> {
  return useQuery(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [(document.definitions[0] as any).name.value, variables],
    async ({ queryKey }) =>
      request(
        import.meta.env.VITE_API_SCHEMA_URL,
        document,
        queryKey[1] ? queryKey[1] : undefined
      )
  );
}
