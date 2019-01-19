import * as React from "react";
import {
  addDecorator,
  RenderFunction,
  StoryDecorator,
  configure
} from "@storybook/react";

const storyBookStyles: React.CSSProperties = {
  textAlign: "center"
};
const CenterDecorator: StoryDecorator = (story: RenderFunction) => {
  return <div style={storyBookStyles}>{story()}</div>;
};

addDecorator(CenterDecorator);

const req = require.context("../src/components", true, /\.story\.tsx$/);

const loadStories = () => {
  req.keys().forEach(req);
};

configure(loadStories, module);
