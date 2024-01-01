"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({
  items,
  item,
}: {
  items: string[];
  item: string;
}) {
  return (
    <Menu as="div" className="inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 text-sm relative">
          <span>{item}</span>
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="rounded-lg w-fit absolute z-10 mt-4 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-[1.6rem,.25rem,1.3rem,.25rem]">
          <div className="py-6 px-2 flex flex-col gap-2 w-fit">
            {items.map((menuItem, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-600" : "text-[#364F6B]",
                      "block px-8 py-1 font-bold rounded"
                    )}
                  >
                    {menuItem}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
