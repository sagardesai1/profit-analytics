import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) =>
        Rule.max(60).warning("Should be under 60 characters"),
      description:
        "This title appears in search engine results and browser tabs",
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) =>
        Rule.max(160).warning("Should be under 160 characters"),
      description: "This description appears in search engine results",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add relevant keywords for search engines",
    }),
    defineField({
      name: "ogImage",
      title: "Social Share Image",
      type: "image",
      description:
        "This image appears when sharing on social media (Recommended: 1200x630)",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});
