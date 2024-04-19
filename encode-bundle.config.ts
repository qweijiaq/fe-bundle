import { defineConfig } from 'wj-fe-bundle';

export default defineConfig({
  name: 'wj-fe-bundle',
  target: 'node16.14',
  dts: {
    resolve: true,
    entry: './src/index.ts',
  },
});
