import type { TinaField } from "tinacms";
export function journalFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
  ] as TinaField[];
}
export function projectFields() {
  return [
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "project_bg_color",
      label: "Background color",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      name: "project_fg_color",
      label: "Foreground color",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      name: "url",
      label: "URL",
    },
  ] as TinaField[];
}
export function theme_configurationFields() {
  return [
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
  ] as TinaField[];
}
