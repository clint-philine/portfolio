import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ease-architectural disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-lift hover:-translate-y-0.5",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft hover:shadow-glow hover:-translate-y-0.5",
        outline:
          "border border-primary/20 text-primary bg-transparent hover:bg-primary hover:text-primary-foreground dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-primary",
        ghost:
          "bg-transparent text-primary hover:bg-primary/5 dark:text-white dark:hover:bg-white/10",
        link: "text-primary underline-offset-4 hover:underline dark:text-white",
      },
      size: {
        default: "h-12 px-7 py-3",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
