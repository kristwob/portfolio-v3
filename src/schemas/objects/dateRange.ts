import { defineType } from "sanity";

export default defineType({
  name: "dateRange",
  title: "Date Range",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "from",
      title: "From",
      type: "date",
      validation: (rule) => rule.required(),
    },
    {
      name: "to",
      title: "To",
      type: "date",
      description: "Leave empty if ongoing",
    },
    {
      name: "current",
      title: "Current Position",
      type: "boolean",
      description: "Check if this is your current position",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      from: "from",
      to: "to",
      current: "current",
    },
    prepare({ title, from, to, current }) {
      const fromDate = from ? new Date(from).getFullYear() : "";
      const toDate = current ? "Present" : to ? new Date(to).getFullYear() : "";
      return {
        title: title || "Untitled",
        subtitle: fromDate && toDate ? `${fromDate} - ${toDate}` : "",
      };
    },
  },
});
