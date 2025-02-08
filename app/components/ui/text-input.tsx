import { cx } from "@/app/lib/utils";

interface ITextInputUI extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({ ...props }: ITextInputUI) {
  return (
    <input
      {...props}
      className={cx(
        `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl
        border border-transparent hover:border-border-secondary
        hover:text-content-body active:border-border-tertiary
       `,
        props.className
      )}
    />
  );
}
