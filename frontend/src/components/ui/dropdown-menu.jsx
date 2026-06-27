import { cn } from "@/lib/utils"
import {
  DropdownMenu as DropdownMenuPrimitive,
  Portal as PortalPrimitive,
  Separator as SeparatorPrimitive,
} from "radix-ui"

function DropdownMenu({ ...props }) {
  return <DropdownMenuPrimitive.Root {...props} />
}

function DropdownMenuTrigger({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.Trigger
      className={cn("outline-none", className)}
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuPortal({ ...props }) {
  return <PortalPrimitive.Root {...props} />
}

function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return (
    <PortalPrimitive.Root>
      <DropdownMenuPrimitive.Content
        className={cn(
          "z-50 min-w-40 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-xs data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className,
        )}
        sideOffset={sideOffset}
        {...props}
      />
    </PortalPrimitive.Root>
  )
}

function DropdownMenuGroup({ ...props }) {
  return <DropdownMenuPrimitive.Group {...props} />
}

function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        variant === "destructive" &&
          "text-destructive focus:bg-destructive/10 dark:focus:bg-destructive/20 focus:text-destructive",
        variant === "default" &&
          "focus:bg-muted focus:text-foreground",
        inset && "ps-8",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-md py-1.5 pe-2 ps-8 text-sm outline-none transition-colors focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuRadioGroup({ ...props }) {
  return <DropdownMenuPrimitive.RadioGroup {...props} />
}

function DropdownMenuRadioItem({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-md py-1.5 pe-2 ps-8 text-sm outline-none transition-colors focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuLabel({ className, inset, ...props }) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-sm font-semibold",
        inset && "ps-8",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({ className, ...props }) {
  return (
    <SeparatorPrimitive.Root
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({ className, ...props }) {
  return (
    <span
      className={cn("ms-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}

function DropdownMenuSub({ ...props }) {
  return <DropdownMenuPrimitive.Sub {...props} />
}

function DropdownMenuSubTrigger({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.Sub.Trigger
      className={cn(
        "flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSubContent({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.Sub.Content
      className={cn(
        "z-50 min-w-40 origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-xs data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuItemIndicator({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.ItemIndicator
      className={cn("absolute start-2 inline-flex items-center", className)}
      {...props}
    />
  )
}

function DropdownMenuArrow({ className, ...props }) {
  return (
    <DropdownMenuPrimitive.Arrow
      className={cn("fill-popover", className)}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
