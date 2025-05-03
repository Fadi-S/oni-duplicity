import * as React from "react";
import Markdown from "react-markdown";
import ChangelogContent from "@changelog";

export default function ChangelogPage() {
  return <Markdown className="prose max-w-3xl mx-auto" children={ChangelogContent} />;
}