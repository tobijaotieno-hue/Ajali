import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-colors",
  {
    variants: {
      status: {
        pending: "bg-accent/20 text-accent-foreground border border-accent/30",
        investigating: "bg-info/20 text-info border border-info/30",
        resolved: "bg-success/20 text-success border border-success/30",
        rejected: "bg-destructive/20 text-destructive border border-destructive/30",
      },
    },
    defaultVariants: {
      status: "pending",
    },
  }
);

export function StatusBadge({ status, className, children }) {
  return (
    <span className={cn(statusBadgeVariants({ status }), className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
}