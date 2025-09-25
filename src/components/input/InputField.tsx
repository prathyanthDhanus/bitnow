import * as React from "react";
import { cn } from "@/lib/utils"; 
import { Input } from "@/components/ui/input"; 


interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 ", className)}>
      <Input placeholder={placeholder} {...props} className="bg-white" />
    </div>
  );
};

export default InputField;
