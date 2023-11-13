import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const filters = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

type Props = {
  value: string;
  fn: (value: string) => void;
};

const FilterBox = ({ value, fn }: Props) => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => setOpen((prev) => !prev);

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="dark:text-white text-darkBlue-dark inline-flex rounded-md items-center justify-between dark:bg-darkBlue-dark bg-white h-12 lg:w-52 w-full pl-6 pr-3 py-3 shadow-md"
        type="button"
        onClick={handleToggleMenu}
      >
        <span className="dark:text-white text-darkBlue-dark text-sm">
          {value !== "" ? value : "Filter by Region"}
        </span>
        <ChevronDownIcon className="w-5 h-5 dark:text-white text-darkBlue-dark" />
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          open ? "block" : "hidden"
        } dark:bg-darkBlue-dark bg-white divide-y divide-gray-100 rounded-md absolute top-14 right-0 lg:w-52 w-full shadow-md`}
      >
        <ul
          className="py-2 text-sm dark:text-white text-darkBlue-dark"
          aria-labelledby="dropdownDefaultButton"
        >
          {filters.map((item) => (
            <li
              className={`block px-4 py-2 hover:font-semibold cursor-pointer ${
                value === item ? "font-semibold" : ""
              }`}
              key={item}
              onClick={() => {
                fn(item);
                handleToggleMenu();
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterBox;
