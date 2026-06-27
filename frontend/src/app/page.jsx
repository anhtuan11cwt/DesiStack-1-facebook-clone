"use client";

import { IconGitBranch } from "@tabler/icons-react";
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
  CalendarPlusIcon,
  CircleFadingArrowUpIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button aria-label="Submit" size="icon" variant="outline">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}

export function ButtonSize() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="xs" variant="outline">
          Extra Small
        </Button>
        <Button aria-label="Submit" size="icon-xs" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button aria-label="Submit" size="icon-sm" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">Default</Button>
        <Button aria-label="Submit" size="icon" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="lg" variant="outline">
          Large
        </Button>
        <Button aria-label="Submit" size="icon-lg" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  );
}

export function ButtonDefault() {
  return <Button>Button</Button>;
}

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>;
}

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>;
}

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>;
}

export function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>;
}

export function ButtonLink() {
  return <Button variant="link">Link</Button>;
}

export function ButtonIcon() {
  return (
    <Button size="icon" variant="outline">
      <CircleFadingArrowUpIcon />
    </Button>
  );
}

export function ButtonWithIcon() {
  return (
    <Button size="sm" variant="outline">
      <IconGitBranch /> New Branch
    </Button>
  );
}

export function ButtonRounded() {
  return (
    <div className="flex flex-col gap-8">
      <Button className="rounded-full" size="icon" variant="outline">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}

export function ButtonSpinner() {
  return (
    <div className="flex gap-2">
      <Button disabled variant="outline">
        <Spinner data-icon="inline-start" />
        Generating
      </Button>
      <Button disabled variant="secondary">
        Downloading
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  );
}

export function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal");

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button aria-label="Go Back" size="icon" variant="outline">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Archive</Button>
        <Button variant="outline">Report</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Snooze</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-label="More Options" size="icon" variant="outline">
              <MoreHorizontalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                Snooze
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                Add to Calendar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon />
                Add to List
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  Label As...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    onValueChange={setLabel}
                    value={label}
                  >
                    <DropdownMenuRadioItem value="personal">
                      Personal
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      Work
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      Other
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Trash
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  );
}

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  );
}

export default function Home() {
  return (
    <div className="space-y-8 p-8">
      <section>
        <h2 className="mb-4 font-bold text-2xl">Button Variants</h2>
        <div className="flex flex-wrap gap-2">
          <ButtonDefault />
          <ButtonOutline />
          <ButtonSecondary />
          <ButtonGhost />
          <ButtonDestructive />
          <ButtonLink />
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-bold text-2xl">Button Demo</h2>
        <ButtonDemo />
      </section>

      <section>
        <h2 className="mb-4 font-bold text-2xl">Button Sizes</h2>
        <ButtonSize />
      </section>

      <section>
        <h2 className="mb-4 font-bold text-2xl">Icon Button</h2>
        <ButtonIcon />
      </section>

      <section>
        <h2 className="mb-4 font-bold text-2xl">With Icon</h2>
        <ButtonWithIcon />
      </section>

      <section>
        <h2 className="mb-4 font-bold text-2xl">Rounded</h2>
        <ButtonRounded />
      </section>

      <section>
        <h2 className="mb-4 font-bold text-2xl">With Spinner</h2>
        <ButtonSpinner />
      </section>

      <section>
        <h2 className="mb-4 font-bold text-2xl">Button Group</h2>
        <ButtonGroupDemo />
      </section>

      <section>
        <h2 className="mb-4 font-bold text-2xl">As Child (Link)</h2>
        <ButtonAsChild />
      </section>
    </div>
  );
}
