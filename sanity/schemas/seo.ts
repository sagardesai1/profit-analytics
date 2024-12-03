export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule: any) =>
        Rule.max(60).warning("Should be under 60 characters"),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule: any) =>
        Rule.max(160).warning("Should be under 160 characters"),
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description: "Recommended size: 1200x630",
    },
  ],
};
