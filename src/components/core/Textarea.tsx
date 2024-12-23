import React, { useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  autoSize?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ error, autoSize, ...rest }) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const [scrollHeight, setScrollHeight] = useState(0);

  const style = {
    ...rest.style,
    height: autoSize ? `${scrollHeight}px` : rest.style?.height,
  };

  useEffect(() => {
    if (autoSize && ref.current) {
      const scrollHeight = ref.current.scrollHeight;

      setScrollHeight(scrollHeight);
    }
  }, [ref, autoSize, rest]);

  return (
    <textarea
      {...rest}
      style={style}
      ref={ref}
      className={cx(
        "p-3 pr-12 rounded-md border border-gray-400 placeholder:text-gray-500 focus:border-primary-600 outline-none focus:ring-0 w-full text-sub2 ",
        "disabled:bg-gray-200 disabled:text-gray-500",
        error && "!border-red-600",
        rest.className
      )}
    />
  );
};

export default Textarea;
