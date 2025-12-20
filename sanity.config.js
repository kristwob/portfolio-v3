import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_VERSION;

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['cv', 'about']);

export default defineConfig({
  basePath: '/studio',
  name: 'Portfolio_Content_Studio',
  title: 'Portfolio Content Studio',

  projectId,
  dataset,
  apiVersion,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // About singleton
            S.listItem()
              .title('About')
              .id('about')
              .icon(() => '👤')
              .child(S.document().schemaType('about').documentId('about')),

            // CV singleton
            S.listItem()
              .title('CV')
              .id('cv')
              .icon(() => '📄')
              .child(S.document().schemaType('cv').documentId('cv')),

            // Divider
            S.divider(),

            // Projects with custom ordering
            S.listItem()
              .title('Projects')
              .icon(() => '💼')
              .child(
                S.documentTypeList('project')
                  .title('Projects')
                  .filter('_type == "project"')
                  .defaultOrdering([
                    { field: 'featured', direction: 'desc' },
                    { field: '_createdAt', direction: 'desc' },
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global "New document" menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && singletonActions.has(action)) : input,
  },
});
