import { defineConfig } from "tinacms";

import { journalFields } from "./templates";
import { projectFields } from "./templates";
import { theme_configurationFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "uploads",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "uploads",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Projects",
        name: "projects",
        path: "projects",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...projectFields(),
        ],
      },
      {
        format: "md",
        label: "Journal",
        name: "journal",
        path: "journal",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...journalFields(),
        ],
      },
      {
        format: "json",
        label: "Theme config",
        name: "theme_config",
        path: "data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "theme",
        },
        fields: [
          {
            type: "string",
            name: "site_name",
            label: "Site name",
          },
          {
            type: "string",
            name: "site_description",
            label: "Site description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "hero_title",
            label: "Hero title",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "hero_subtitle",
            label: "Hero subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "footer",
            label: "Footer text",
          },
          {
            type: "boolean",
            name: "dark_mode",
            label: "Dark mode",
          },
        ],
      },
    ],
  },
});
