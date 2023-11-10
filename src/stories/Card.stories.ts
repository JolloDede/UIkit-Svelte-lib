import type { Meta, StoryObj } from "@storybook/svelte";

import Card from "./SCard.svelte";

const meta = {
    title: 'Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        style: { control: 'select', options: ['default', 'primary', 'secondary'] },
        title: { control: 'text', description: 'There is also a <CardTitle> that has the default style of a title' },
        header: { control: 'boolean', description: '<svelte:fragment slot="header"' },
        body: { control: 'boolean', description: '<svelte:fragment slot="body"' },
        footer: { control: 'boolean', description: '<svelte:fragment slot="footer"' },
    },
    args: {
        style: 'default',
        header: false,
        body: false,
        footer: false,
    },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "Card Text",
    }
};

export const DefaultWithTitle: Story = {
    args: {
        title: 'Card Title',
        text: "Card Text",
    }
};


export const Full: Story = {
    args: {
        text: "Card Text",
        header: true,
        body: true,
        footer: true,
    }
};