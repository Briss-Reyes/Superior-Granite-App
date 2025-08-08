import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas/index';

const config = defineConfig({
  projectId: "xl3l1320",
  dataset: "production",
  title: "Superior Granite Dashboard",
  apiVersion: "2025-05-19",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemas},
})

export default config