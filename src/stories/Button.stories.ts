import type { Meta, StoryObj } from "@storybook/svelte";

import UikitButton from "./SButton.svelte";

const meta = {
    title: 'Button',
    component: UikitButton,
    tags: ['autodocs'],
    argTypes: {
        style: {
            control: 'select', options: ['default', 'primary', 'secondary', 'danger', 'text', 'link']
        },
        size: { control: 'select', options: ['small', '', 'large'] },
        text: { control: 'text', description: "<slot />" },
    }
} satisfies Meta<UikitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Button",
        style: 'default',
    }
};

export const Primary: Story = {
    args: {
        text: "Button",
        style: 'primary',
    }
}

export const Secondary: Story = {
    args: {
        text: "Button",
        style: 'secondary',
    }
}

export const Danger: Story = {
    args: {
        text: "Button",
        style: 'danger',
    }
}

export const Text: Story = {
    args: {
        text: "Text",
        style: 'text',
    }
}

export const Link: Story = {
    args: {
        text: "Link",
        style: 'link',
    }
}


export const Small: Story = {
    args: {
        text: "Button",
        size: 'small',
    }
}

export const Large: Story = {
    args: {
        text: "Button",
        size: 'large',
    }
}