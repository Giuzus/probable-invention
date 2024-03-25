import { Label } from "@radix-ui/react-label";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "ui/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "I am a label",
  },
};
