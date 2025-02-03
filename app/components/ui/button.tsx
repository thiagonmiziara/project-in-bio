import { cx } from "@/app/lib/utils";

interface IButtonUI extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({ children, variant, ...props }: IButtonUI) {
  return (
    <button
      className={cx(
        "p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70",
        variant === "primary" && "bg-accent-purple",
        variant === "secondary" && "bg-background-tertiary",
        variant === "ghost" && "border-border-primary",
        props.className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
