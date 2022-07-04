import TypoExample from "@root/stories/TypoExample";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: "Common/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      defaultValue: TypoExample.Body1,
      description: "버튼에 들어갈 텍스트 요소입니다.",
      type: {
        name: "function",
        required: true
      },
      options: Object.keys(TypoExample),
      mapping: TypoExample,
      control: {
        type: "select",
        labels: {
          Body7: "Body7",
          Body6: "Body6",
          Body5: "Body5",
          Body4: "Body4",
          Body3: "Body3",
          Body2: "Body2",
          Body1: "Body1",
          Subtitle6: "Subtitle6",
          Subtitle5: "Subtitle5",
          Subtitle4: "Subtitle4",
          Subtitle3: "Subtitle3",
          Subtitle2: "Subtitle2",
          Subtitle1: "Subtitle1",
          Title3: "Title3",
          Title2: "Title2",
          Title: "Title1"
        }
      }
    },
    width: {
      defaultValue: 100,
      description: "버튼의 가로 넓이를 결정짓는 요소입니다.",
      type: {
        name: "number",
        required: true
      },
      control: "number"
    },
    height: {
      defaultValue: 100,
      description: "버튼의 세로 넓이를 결정짓는 요소입니다.",
      type: {
        name: "number",
        required: true
      },
      control: "number"
    },
    filled: {
      defaultValue: false,
      description:
        "버튼이 칠해져있는 버튼인지 테두리만 있는지 결정 짓습니다. \ntrue: 테두리x 배경색상 / false -> 테두리",
      type: {
        name: "boolean",
        required: true
      },
      control: "boolean"
    },
    onClickHandler: {
      defaultValue: () => console.log("함수 실행"),
      description: "버튼이 클릭되었을 때 실행되어야 할 함수입니다.",
      type: {
        name: "function",
        required: true
      }
    },
    bgColor: {
      defaultValue: "red",
      description: "배경색 또는 테두리 색을 결정짓는 요소입니다.",
      type: {
        name: "string",
        required: true
      },
      control: "color"
    },
    title: {
      defaultValue: "Button Title",
      description: "버튼의 Title 요소를 결정짓는 요소입니다.",
      type: {
        name: "string",
        required: true
      }
    },
    disable: {
      defaultValue: false,
      description: "버튼의 disabled 속성을 결정짓는 요소입니다.",
      type: {
        name: "boolean",
        required: true
      }
    },
    borderRadius: {
      description: "버튼의 border-radius 속성을 결정짓는 요소입니다.",
      type: {
        name: "number",
        required: false
      }
    },
    relative: {
      description: "true일 경우 position이 relative가 됩니다.",
      type: {
        name: "boolean",
        required: false
      }
    },
    shadow: {
      description:
        "버튼의 box-shadow 값을 주는 요소입니다.\n10px 10px 20px 0px rgba(0,0,0,0.1)",
      type: {
        name: "string",
        required: false
      }
    },
    moWidth: {
      description: "버튼의 모바일 width를 결정 짓는 요소입니다.",
      type: {
        name: "number",
        required: false
      }
    },
    moHeight: {
      description: "버튼의 모바일 height를 결정 짓는 요소입니다.",
      type: {
        name: "number",
        required: false
      }
    }
  }
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
