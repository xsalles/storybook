import Button from "./index";

export default {
  title: "Storybook/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: {control: "text" },
    border: {control: 'boolean'},
    borderWidth: {control: {type: 'range', min: 0, max: 10}},
    borderColor: {control: 'color'}
  },
};

const Template = (args) => (
  <Button {...args}  />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary button",
  backgroundColor: '#FFFF',
  border: 'true',
  borderWidth: 2,
  borderColor: '#000000'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Second Button",
  backgroundColor: "#000000",
  border: 'true',
  borderWidth: 2, 
  borderColor: '#000000'
};
