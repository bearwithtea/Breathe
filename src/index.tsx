import { Detail } from "@raycast/api";
import ReactMarkdown from "react-markdown";



  const markdown =
  `
    |    |
    |    |
    |    |
    |    |
    |    |
    |    |
    |    |
    |    |
    |    |
    |____|
  `;

export default function () {
  return <Detail markdown={markdown} />;
}