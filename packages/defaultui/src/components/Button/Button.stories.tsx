import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from "./Button";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {
    label: {
      defaultValue: "test",
      description: "label 정해줘요",
      type: {
        name: "string",
        required: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "asddd",
};
