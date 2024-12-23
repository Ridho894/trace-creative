import cx from "classnames";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gray" | "secondary";
  size?: "xl" | "l" | "m" | "s" | "xs";
  full?: Boolean;
  leftIcon?: String | React.ReactNode;
  rightIcon?: String | React.ReactNode;
}

const sizes = {
  xl: "text-h6 px-6 py-4",
  l: "text-sub1 px-4 py-3",
  m: "text-sub2 px-[14px] py-[11px]",
  s: "text-sub3 px-3 py-2",
  xs: "text-sub4 px-2 py-1",
};

const Button: React.FC<ButtonProps> = ({
  variant = "gray",
  color,
  full = false,
  size = "l",
  leftIcon,
  rightIcon,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cx(
        "rounded-md font-bold transition-colors duration-200",
        "focus:outline-[1px] focus:outline-gray-700",
        sizes[size],
        {
          "w-full": full,
          // variant primary
          "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800 disabled:bg-base-500":
            variant === "gray",
          // variant secondary
          "border border-gray-600 text-gray-600 hover:border-gray-700 hover:bg-white hover:text-gray-700 active:text-gray-800 disabled:border-base-500 disabled:text-base-500":
            variant === "secondary",
        },
        className
      )}
    >
      {leftIcon && <i className="pr-4">{leftIcon}</i>}
      {rest.children}
      {rightIcon && <i className="pl-4">{rightIcon}</i>}
    </button>
  );
};

export default Button;
