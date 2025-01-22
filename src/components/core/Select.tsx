import { Fragment, useEffect, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import cx from "classnames";
import Image from "next/image";
import { IoMdArrowDropdown as ChevronIcon } from "react-icons/io";

export type SelectItem = {
  id: string | number;
  name: string;
  disabled?: boolean;
  flag?: string;
};

type SelectProps = {
  value?: string | number | SelectItem;
  data: SelectItem[];
  className?: string;
  dropdownClassName?: string;
  chevronColor?: string;
  onChange?: (value: SelectItem) => void;
  error?: boolean;
  disabled?: boolean;
};

const Select: React.FC<SelectProps> = ({
  data,
  value,
  className,
  dropdownClassName,
  chevronColor = "white",
  disabled,
  error,
  onChange = () => null,
}) => {
  const [selected, setSelected] = useState<SelectItem>();

  const handleOnChange = (e: SelectItem) => {
    setSelected(e);
    onChange(e);
  };

  useEffect(() => {
    if (typeof value === "object") {
      setSelected(value);
    } else {
      const findedData = data.filter((item) => item.name == value);
      if (findedData?.length) {
        setSelected(findedData.at(0));
      }
    }
  }, [value]);

  return (
    <div className="relative">
      <Listbox value={selected} onChange={handleOnChange}>
        {({ open }) => (
          <>
            <ListboxButton
              className={cx(
                "relative p-3 rounded-md w-full h-full text-sub2 text-left outline-none",
                "transition-colors duration-150",
                "focus-visible:border-[#FFD205]",
                {
                  "bg-[#043D58]": open,
                  "border-base-400 ": !open,
                  "!border-red-600": error,
                  "bg-gray-200 pointer-events-none text-gray-500": disabled,
                },
                className
              )}
            >
              <p className="text-white">{selected?.name}</p>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronIcon
                  color={chevronColor}
                  className={cx("transition-transform duration-200 w-4 h-4", {
                    "rotate-180 text-white": open,
                    "rotate-0": !open,
                  })}
                />
              </span>
            </ListboxButton>
            <ListboxOptions
              className={cx(
                "bg-white rounded-md border border-base-400 mt-2 absolute top-full right-0 w-full z-[1] shadow-lg outline-none",
                dropdownClassName
              )}
            >
              {data.map((item) => (
                <ListboxOption
                  key={item.id}
                  value={item}
                  disabled={item.disabled}
                  as={Fragment}
                >
                  {({ selected }) => (
                    <li
                      className={cx(
                        "p-4 cursor-pointer list-none hover:bg-backgroundLight-100 border-b-2 text-sub2 font-normal text-base-900 capitalize rounded-t-md last:rounded-b-md",
                        {
                          "bg-[#043D58]/20": selected,
                        }
                      )}
                    >
                      {item.name}
                    </li>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
