import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox from "./CheckBox";

export default {
  title: "Common/CheckBox",
  component: CheckBox,
  argTypes: {
    label: {
      defaultValue: "test",
      description: "label 정해줘요",
      type: {
        name: "string",
        required: true
      }
    }
  }
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = args => (
  <CheckBox {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "checkbox"
};
