import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";

const meta = {
  title: "ui/Popover",
  component: PopoverContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: { type: "radio" },
      options: ["start", "center", "end"],
      table: { type: { summary: "string" } },
    },
    sideOffset: {
      type: "number",
      default: 4,
      description: "Offset in pixels",
      table: { type: { summary: "number" } },
    },
  },
  args: {
    align: "center",
    sideOffset: 4,
  },
} satisfies Meta<typeof PopoverContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent {...args}></PopoverContent>
    </Popover>
  ),
  args: {
    children: "Popover content",
  },
};
