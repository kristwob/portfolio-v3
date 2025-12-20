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
      title: "Personal Information",
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
          title: "Date of Birth",
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
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: "experiences",
      title: "Work Experience",
      type: "array",
      of: [{ type: "dateRange" }],
      description: "Your work history",
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "dateRange" }],
      description: "Your educational background",
    }),
    defineField({
      name: "courses",
      title: "Courses & Certifications",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Course Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "date",
              title: "Completion Date",
              type: "date",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "issuer",
              title: "Issuing Organization",
              type: "string",
            }),
            defineField({
              name: "credentialUrl",
              title: "Credential URL",
              type: "url",
              description: "Link to verify the credential",
            }),
          ],
          preview: {
            select: {
              title: "title",
              date: "date",
              issuer: "issuer",
            },
            prepare({ title, date, issuer }) {
              const year = date ? new Date(date).getFullYear() : "";
              const subtitle = issuer ? `${issuer}${year ? ` - ${year}` : ""}` : (year ? String(year) : "");
              return {
                title: title || "Untitled",
                subtitle,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "language" }],
      description: "Languages you speak",
    }),
    defineField({
      name: "display",
      title: "Featured Experience",
      description: "Select experiences to highlight on your homepage",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "location",
              type: "string",
              title: "Location",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
              description: "A short description about your experience",
              validation: (rule) => rule.required().max(200),
            }),
          ],
          preview: {
            select: {
              title: "heading",
              subtitle: "location",
            },
          },
        },
      ],
      validation: (rule) => rule.max(3),
    }),
  ],
  preview: {
    select: {
      name: "personalia.name",
    },
    prepare({ name }) {
      return {
        title: name ? `CV - ${name}` : "CV",
      };
    },
  },
});
