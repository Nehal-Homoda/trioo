
'use client'

import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
const countryCode = ["+20", "+90", "+67"];
export default function phoneNumber({ label, placeholder, required }) {
  const [selectedCountry,setSelectedCountry]=useState(countryCode[0]);
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <div className="form-input flex ">
                <Menu >
                    <MenuButton className=" inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    {selectedCountry}
                    </MenuButton>

                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-15 bg-background origin-top-right rounded-lg  p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        {countryCode.map((item) => (
                            <MenuItem>
                                <button onClick={()=>setSelectedCountry(item)} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                   {item}
                                </button>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>

                <input
                    type="number"
                    placeholder={placeholder}
                    required={required}
                    className="w-full focus:outline-none"
                />
            </div>
        </div>
    );
}
