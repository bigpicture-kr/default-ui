var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { Button } from "@root/components/Button";
export default {
    title: "Common/Button",
    component: Button,
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
};
var Template = function (args) { return React.createElement(Button, __assign({}, args)); };
export var Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    label: "ㅉqeqe"
};
//# sourceMappingURL=Button.stories.js.map