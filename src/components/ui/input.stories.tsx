import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "ui/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["text", "password", "file"],
    },
  },
  args: {
    placeholder: "I am an input",
    type: "text",
    disabled: false,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Password: Story = {
  args: {
    type: "password",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};
