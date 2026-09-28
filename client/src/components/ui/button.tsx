import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Knöpfe (F1, F14): Fokusring in Tinte mit weissem Zwischenring, damit er auf
 * jeder Fläche 3:1 hat; auf dunklen Flächen dreht .on-dark die Farben um.
 * Kurzer Druckpunkt (.press), Übergänge nur auf Farben.
 */
const buttonVariants = cva(
  "press inline-flex items-center justify-center gap-2 rounded-[3px] text-sm font-medium tracking-[0.005em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-signal text-white hover:bg-signal-dark",
        ink: "bg-ink text-white hover:bg-ink-700",
        inverse:
          "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-12 px-6 text-[0.9375rem] has-[>svg]:px-5",
        xl: "h-14 px-7 text-base has-[>svg]:px-6 [&_svg:not([class*='size-'])]:size-5",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
