import TypoExample from "@root/stories/TypoExample";
import { GlobalStyle } from "@root/styles/Global.style";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import CheckBox from "./CheckBox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Common/CheckBox",
  component: CheckBox,
  argTypes: {
    active: {
      defaultValue: false,
      description: "checkbox의 활성화 상태 입니다.",
      type: {
        name: "boolean",
        required: true
      }
    },
    setter: {
      defaultValue: () => console.log("hi"),
      description: "checkbox의 활성화 상태를 결정짓는 함수입니다.",
      type: {
        name: "function",
        required: true
      }
    },
    width: {
      defaultValue: 20,
      description: "버튼의 가로 넓이를 결정짓는 요소입니다.",
      type: {
        name: "number",
        required: true
      },
      control: "number"
    },
    height: {
      defaultValue: 20,
      description: "버튼의 세로 넓이를 결정짓는 요소입니다.",
      type: {
        name: "number",
        required: true
      },
      control: "number"
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
    },
    children: {
      defaultValue: TypoExample.Body1,
      description: "Checkbox 라벨 텍스트",
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
    title: {
      defaultValue: "CheckBox 활성화",
      description: "CheckBox Title 요소",
      type: {
        name: "string",
        required: true
      }
    }
  }
} as ComponentMeta<typeof CheckBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckBox> = args => {
  const [isActive, setIsActive] = useState(args.active);

  return (
    <>
      <GlobalStyle />
      <CheckBox
        active={isActive}
        setter={setIsActive}
        title={args.title}
        width={args.width}
        height={args.height}
      >
        {args.children}
      </CheckBox>
    </>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
