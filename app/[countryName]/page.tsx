"use client";
import React from "react";
import data from "@/app/data.json";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/navigation";

function loopBorders(border: string[] | undefined): string[] {
  let newBorders: string[] = [];

  if (border) {
    border.forEach((borderCode) => {
      data.forEach((country) => {
        if (country.alpha3Code === borderCode) {
          newBorders.push(country.name);
        }
      });
    });
  }

  return newBorders;
}

const CountryDetails = ({
  params,
}: {
  params: {
    countryName: string;
  };
}) => {
  const router = useRouter();
  const details = data.find(
    (item) => item.name === params.countryName.replaceAll("-", " ")
  );

  const countryBorders = loopBorders(details?.borders);

  return (
    <div className="px-3 lg:px-0 w-full lg:w-9/12 mx-auto mt-10">
      <button
        className="dark:text-white text-darkBlue-dark inline-flex rounded-md items-center gap-3 justify-between dark:bg-darkBlue-dark bg-white h-12 w-fit px-6 py-3 shadow-md"
        onClick={() => router.push("/")}
      >
        <ArrowLongLeftIcon className="w-6 h-6 dark:text-white text-darkBlue-dark" />
        <span className="dark:text-white text-darkBlue-dark text-sm">Back</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-16 mt-10">
        <div className="relative w-full h-96 bg-white shadow-md rounded-md overflow-hidden">
          <Image
            src={details?.flag as string}
            alt={details?.name as string}
            objectFit="cover"
            layout="fill"
            priority
          />
        </div>
        <div>
          <h1 className="dark:text-white text-darkBlue-dark text-3xl font-bold mb-6">
            {details?.name}
          </h1>
          <div className="flex flex-col md:flex-row md:justify-start sm:justify-start justify-between md:gap-10 gap-6 mb-4">
            <div>
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold mb-2">
                Native Name:{" "}
                <span className="font-normal">{details?.nativeName}</span>
              </p>
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold mb-2">
                Population:{" "}
                <span className="font-normal">{details?.population}</span>
              </p>
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold mb-2">
                Region: <span className="font-normal">{details?.region}</span>
              </p>
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold mb-2">
                Sub Region:{" "}
                <span className="font-normal">{details?.subregion}</span>
              </p>
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold mb-2">
                Capital: <span className="font-normal">{details?.capital}</span>
              </p>
            </div>
            <div>
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold mb-2">
                Top Level Domain:{" "}
                <span className="font-normal">{details?.topLevelDomain}</span>
              </p>
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold mb-2">
                Currencies:{" "}
                <span className="font-normal">
                  {details?.currencies?.map((item) => item.name).toString()}
                </span>
              </p>
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold mb-2">
                Languages:{" "}
                <span className="font-normal">
                  {details?.languages?.map((item) => item.name).toString()}
                </span>
              </p>
            </div>
          </div>
          {countryBorders.length > 0 && (
            <div className="flex lg:flex-row flex-col gap-2 items-start">
              <p className="dark:text-white text-darkBlue-dark text-sm font-semibold whitespace-nowrap mt-1">
                Border Countries:
              </p>
              <div>
                {countryBorders.map((item) => (
                  <div
                    key={item}
                    className="py-1 px-3 dark:bg-darkBlue-dark bg-white rounded-md inline-block dark:text-white text-darkBlue-dark text-sm mr-2 mb-2 shadow-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
