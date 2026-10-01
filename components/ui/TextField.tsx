import { cn } from "@/lib/utils";

type TextFieldProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export function TextField({
  label,
  id,
  name,
  className,
  ...props
}: TextFieldProps) {
  const fieldId = id ?? name;
  return (
    <div>
      <label
        htmlFor={fieldId}
        className="block text-[14px] font-medium leading-5 text-ink"
      >
        {label}
      </label>
      <input
        id={fieldId}
        name={name}
        {...props}
        className={cn(
          "mt-1.5 h-13 w-full rounded-xl border border-line bg-[#fcfcfc] px-6 text-[18px] text-ink outline-none transition-colors placeholder:text-muted focus:border-brand",
          className,
        )}
      />
    </div>
  );
}
