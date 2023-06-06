import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
dotenv.config();

const config: CodegenConfig = {
  schema: process.env.VITE_API_SCHEMA_URL,
  documents: ['./src/**/*.graphql'],
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        fetcher: '@api/fetcher#fetchData',
        isReactHooks: true,
      },
    },
  },
};
export default config;
