"use client";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "donate";
};

export default function Button({
  variant = "primary",
  children,
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium";
  const styles = {
    primary: "bg-white text-foreground border",
    ghost: "border bg-transparent",
    donate: "bg-amber-500 text-white hover:bg-amber-600",
  } as const;
  return (
    <button className={`${base} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}
