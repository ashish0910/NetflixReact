import React from "react";
import { useContent } from "../hooks";
import { selectionFilter } from "../util";
import { BrowseContainer } from "../containers/browse";

function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  console.log(slides);
  return <BrowseContainer slides={slides}></BrowseContainer>;
}

export default Browse;
