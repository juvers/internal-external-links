import React from "react";
import { FaPaperclip } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

// use to add font family to editor content
const TitleStyle = (props) => (
  <span style={{ fontFamily: "Brush Script MT", fontSize: "2em" }}>
    {props.children}
  </span>
);
// use to create custom icon
const highlightIcon = () => (
  <span style={{ fontWeight: "bold", backgroundColor: "#f00", padding: "5px" }}>
    H
  </span>
);

// use to choose how text renders such as bg-color
const highlightRender = (props) => (
  <span style={{ backgroundColor: "yellow" }}>{props.children}</span>
);

// add icon to text
const ExternalLinkRenderer = (props) => (
  <span style={{ color: "#f00" }}>
    {props.children} <FaExternalLinkAlt />
  </span>
);

export default {
  name: "blockContent",
  title: "Block Content",
  // You can't currently use block as a standalone field outside of an array.
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        {
          title: "Title",
          value: "title",
          // render titles with specific fonts
          blockEditor: {
            render: TitleStyle,
          },
        },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          {
            // custom annotations can be added via title and value to the portableText
            title: "Highlight",
            value: "highlight",
            // using blockEditor icon and render allows more customization
            blockEditor: {
              icon: highlightIcon,
              render: highlightRender,
            },
          },
        ],
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            blockEditor: {
              icon: FaPaperclip,
            },
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [
                  { type: "person" },
                  // other types you may want to link to
                ],
              },
            ],
          },
          {
            name: "link",
            type: "object",
            title: "External link",
            // this adds an icon in the portable text showing its an external link
            blockEditor: {
              icon: FaExternalLinkAlt,
              render: ExternalLinkRenderer,
            },
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://site-name.com",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
    },
    {
      type: "code",
      title: "CodeTitle",
    },
  ],
};
