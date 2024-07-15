import Header from "./index";

export default {
  title: "Storybook/Header",
  component: Header,
  argTypes: {
    main: { control: "text" },
    sectionOne: { control: "text" },
    sectionTwo: { control: "text" },
    sectionThree: { control: "text" },
    gap: { control: "number" },
    backgroundColor: { control: "color" },
    border: { control: "boolean" },
    borderWidth: { control: { type: "range", min: 0, max: 10 } },
    borderColor: { control: "color" },
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  main: "Title",
  sectionOne: "Subtitle",
  sectionTwo: "Subtitle",
  sectionThree: "Subtitle",
  backgroundColor: "#000000",
  gap: 80,
  border: 'true',
  borderWidth: 2, 
  borderColor: '#000000'
};
