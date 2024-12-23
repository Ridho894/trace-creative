import cx from "classnames";
import React, { HTMLInputTypeAttribute } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  leftIcon?: React.ReactNode;
  leftIconClick?: () => void;
  rightIcon?: React.ReactNode;
  rightIconClick?: () => void;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  leftIcon,
  leftIconClick,
  rightIcon,
  rightIconClick,
  className,
  error = false,
  ...rest
}) => {
  if (rightIcon) {
    return (
      <div className="relative">
        <input
          {...rest}
          type={type}
          className={cx(
            "w-full rounded-md border border-gray-400 p-3 pr-12 text-sub2 placeholder:text-gray-500 focus:border-primary-600 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-500",
            error && "!border-red-600",
            className
          )}
        />
        {rightIconClick ? (
          <span
            className="absolute top-0 right-0 h-full cursor-pointer p-4"
            onClick={rightIconClick}
          >
            {rightIcon}
          </span>
        ) : (
          <span className="absolute top-0 right-0 flex h-full items-center px-4">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }

  if (leftIcon) {
    return (
      <div className="relative">
        <input
          {...rest}
          type={type}
          className={cx(
            "w-full rounded-md border border-gray-400 p-3 pl-12 text-sub2 placeholder:text-gray-500 focus:border-primary-600 focus:outline-none focus:ring-0 disabled:pointer-events-none  disabled:bg-gray-200 disabled:text-gray-500",
            error && "!border-danger-500",
            className
          )}
        />
        {leftIconClick ? (
          <span
            className="absolute top-0 left-0 h-full cursor-pointer bg-gray-200 p-2"
            onClick={leftIconClick}
          >
            {leftIcon}
          </span>
        ) : (
          <span className="absolute top-0 left-0 flex h-full items-center px-4">
            {leftIcon}
          </span>
        )}
      </div>
    );
  }

  return (
    <input
      {...rest}
      type={type}
      className={cx(
        "w-full rounded-md border border-gray-400 p-3 text-sub2 placeholder:text-gray-500 focus:border-primary-600 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-500",
        error && "!border-danger-500 placeholder:text-danger-500",
        className
      )}
    />
  );
};

export default Input;
