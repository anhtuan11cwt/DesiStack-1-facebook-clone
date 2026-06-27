import { cn } from "@/lib/utils"

function Spinner({ className, ...props }) {
  return (
    <svg
      className={cn("animate-spin size-4", className)}
      data-icon="inline-start"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="8"
        cy="8"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        className="opacity-75"
        d="M8 1a7 7 0 0 1 7 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export { Spinner }
