import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { fn } from "@storybook/test";
import { ChevronRight, Loader2, Mail } from "lucide-react";

const meta = {
  title: "ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    asChild: {
      type: "boolean",
      description: "Merges its props onto its immediate child",
      table: { type: { summary: "boolean" } },
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "secondary", "destructive", "outline", "link"], //TODO: can we get this from the ButtonType?
    },
    size: {
      control: { type: "radio" },
      options: ["default", "sm", "lg", "icon"], //TODO: can we get this from the ButtonType?
    },
    disabled: { type: "boolean" },
  },
  args: {
    variant: "default",
    size: "default",
    children: "I am a button",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AsChild: Story = {
  args: {
    children: <a>Login</a>,
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: <ChevronRight className="h-4 w-4" />,
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    ),
  },
};
