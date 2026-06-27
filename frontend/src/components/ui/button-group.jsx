import { cn } from "@/lib/utils"

function ButtonGroup({ className, ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center data-[slot=button-group]:rounded-lg rounded-[min(var(--radius-lg),16px)] border border-border bg-background shadow-xs **:data-[slot=button]:m-0 **:data-[slot=button]:rounded-none **:data-[slot=button]:border-0 **:data-[slot=button]:shadow-none has-[[data-slot=button-group]]:p-1 [&_[data-slot=button]+[data-slot=button]]:border-s **:data-[slot=button-group]:rounded-none **:data-[slot=button-group]:border-0 **:data-[slot=button-group]:shadow-none",
        className,
      )}
      data-slot="button-group"
      {...props}
    />
  )
}

export { ButtonGroup }
