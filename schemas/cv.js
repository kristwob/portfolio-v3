import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons";

export default defineType({
  name: "cv",
  title: "CV",
  icon: DocumentIcon,
  type: "document",
  fields: [
    defineField({
      name: "personalia",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "nationality",
          title: "Nationality",
          type: "string",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "DOB",
          title: "DOB",
          type: "date",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "email",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineType({
      name: "experiences",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "from",
              type: "date",
            }),
            defineField({
              name: "to",
              type: "date",
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "education",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "from",
              type: "date",
            }),
            defineField({
              name: "to",
              type: "date",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "courses",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              type: "string",
            }),
            defineField({
              name: "date",
              type: "date",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "languages",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "language",
              type: "string",
            }),
            defineField({
              name: "written",
              type: "string",
            }),
            defineField({
              name: "oral",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "display",
      title: "Display Experience",
      description: "Pick what experience you want to display",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
});
