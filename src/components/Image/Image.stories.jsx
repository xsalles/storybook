import Image from "./index";

export default {
    title: "Storybook/Image",
    component: Image,
    argTypes: {
        src: {control: 'text' }
    }
}

const Template = (args) => <Image {...args}/>

export const Main = Template.bind({});

Main.args = {
    src: ''
}