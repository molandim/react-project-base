import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ButtonComponent } from "./Button.component";
import { text, withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

const stories = storiesOf("Components", module);
stories.addDecorator(withKnobs);

stories.add(
  "Progress Bar",
  withInfo({})(() => {
    return <ButtonComponent>{text("sometext", "fdfs")}</ButtonComponent>;
  })
);
