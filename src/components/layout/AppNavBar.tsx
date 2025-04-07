'use client'

import React from "react";
import { icons } from "@/core/assets.manager";
import routesManager from "@/core/routes.manager";
import Link from "next/link";
import LangDropDown from "../Base/LangDropDown";
import ThemeButton from "../Base/ThemeButton";
import { useRouter } from "next/navigation";

const navLinks = [
    { name: "Home", link: routesManager.home },
    { name: "About Us", link: routesManager.aboutUs },
    { name: "Orders", link: routesManager.followRequest },
    { name: "Services", link: routesManager.ourService },
];

export default function AppNavBar() {
    const router=useRouter()
    return (
        <div className="w-full bg-surface py-3 lg:px-10 px-4 flex justify-between items-center dark:bg-red-500">
            <div className="w-full flex items-center gap-20">
                <div className=" w-20">
                    <img
                        className="w-full h-full  object-contain"
                        src={icons.logo.src}
                        alt=""
                    />
                </div>
                <div className="hidden lg:flex justify-center items-center  text-md gap-12">
                    {navLinks.map((item, index) => (
                        <Link key={index} href={item.link}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center gap-2 ">
                <button onClick={()=>router.push(routesManager.login)} className="bg-primary rounded-lg w-40 h-9  text-background text-md">
                    Login
                </button>
                <ThemeButton />
                <LangDropDown />
            </div>
        </div>
    );
}
