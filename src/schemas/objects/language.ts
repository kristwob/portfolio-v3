import { defineType } from "sanity";

export default defineType({
  name: "language",
  title: "Language",
  type: "object",
  fields: [
    {
      name: "language",
      title: "Language",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "written",
      title: "Written Level",
      type: "string",
      options: {
        list: [
          { title: "Native", value: "native" },
          { title: "Fluent", value: "fluent" },
          { title: "Advanced", value: "advanced" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Basic", value: "basic" },
        ],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "oral",
      title: "Oral Level",
      type: "string",
      options: {
        list: [
          { title: "Native", value: "native" },
          { title: "Fluent", value: "fluent" },
          { title: "Advanced", value: "advanced" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Basic", value: "basic" },
        ],
      },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "language",
      written: "written",
      oral: "oral",
    },
    prepare({ title, written, oral }) {
      return {
        title: title || "Untitled",
        subtitle: `Written: ${written}, Oral: ${oral}`,
      };
    },
  },
});
