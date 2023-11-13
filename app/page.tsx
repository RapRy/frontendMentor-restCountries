"use client";
import { useState } from "react";
import Link from "next/link";
import data from "./data.json";
import FilterBox from "@/components/FilterBox";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Home() {
  const [countryList, setCountrylist] = useState(data);
  const [region, setRegion] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setCountrylist(data);
      return;
    }

    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setCountrylist(filteredItems);
    setRegion("");
  };

  const handleSelectRegion = (value: string) => {
    const filteredItems = data.filter((item) => item.region === value);

    setCountrylist(filteredItems);
    setRegion(value);
  };

  return (
    <>
      <div className="px-3 lg:px-0 w-full lg:w-9/12 mx-auto mt-10 flex flex-col md:flex-row gap-2 justify-between">
        <div className="px-10 py-3 rounded-md bg-white dark:bg-darkBlue-dark h-12 w-full md:max-w-md flex flex-row items-center justify-center gap-5 shadow-md">
          <MagnifyingGlassIcon className="w-6 h-6 dark:text-white text-darkBlue-dark" />
          <input
            className="bg-transparent outline-none w-full text-sm dark:text-white text-darkBlue-dark font-semibold dark:placeholder:text-white placeholder:text-darkBlue-dark placeholder:font-normal"
            placeholder="Search for a country..."
            onChange={handleSearch}
          />
        </div>

        <FilterBox value={region} fn={handleSelectRegion} />
      </div>
      <div
        className={`px-3 lg:px-0 w-full lg:w-9/12 mx-auto mt-10 overflow-y-auto h-[75vh]`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {countryList.map((item, key) => (
            <Link key={key} href={`/${item.name.replaceAll(" ", "-")}`}>
              <div className="shadow-md rounded-md w-full overflow-hidden cursor-pointer hover:shadow-none hover:scale-95 transition-transform duration-300 ease-in-out">
                <div className="relative w-full h-32">
                  <Image
                    src={item.flag}
                    alt={item.name}
                    objectFit="cover"
                    layout="fill"
                    priority
                  />
                </div>
                <div className="dark:bg-darkBlue-dark bg-white p-4 h-full">
                  <p className="dark:text-white text-darkBlue-dark font-semibold text-sm mb-3">
                    {item.name}
                  </p>
                  <p className="dark:text-white text-darkBlue-dark text-xs font-semibold mb-1">
                    Population:{" "}
                    <span className="font-normal">{item.population}</span>
                  </p>
                  <p className="dark:text-white text-darkBlue-dark text-xs font-semibold mb-1">
                    Region: <span className="font-normal">{item.region}</span>
                  </p>
                  <p className="dark:text-white text-darkBlue-dark text-xs font-semibold mb-1">
                    Capital: <span className="font-normal">{item.capital}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
