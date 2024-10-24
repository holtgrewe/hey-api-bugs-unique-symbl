import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input: 'varfish_api_schema.yaml',
  output: 'ext/varfish-api/src/lib',
  plugins: [
    '@tanstack/vue-query'
  ]
});

