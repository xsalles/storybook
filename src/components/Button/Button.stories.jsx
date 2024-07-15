import Button from "./index";


export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    label: {control: "text" }
  },
};

const Template = (args) => (
  <Button {...args} style={{ backgroundColor: args.backgroundColor}} label={args.label} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary button",
  backgroundColor: '#FFFF'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Second Button",
  backgroundColor: "#000000",
};
