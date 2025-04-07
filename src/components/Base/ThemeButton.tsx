"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function ThemeButton() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        
        if (!isDark) {
            document.documentElement.setAttribute("data-mode", "dark");
            localStorage.setItem("theme", 'dark');
            return;
        }
        document.documentElement.setAttribute("data-mode", "light");

        localStorage.setItem("theme", 'light');
        // console.log("hiiiiiiiiii");
        // if (!defaultMode) return;


        // if(localStorage.getItem('theme')=='light')
        // {
        //     document.documentElement.setAttribute("data-mode",'dark')
        //     return

        // }

        // setTheme('dark')
    };

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            const themeMode = localStorage.getItem("theme");
            if (themeMode == "light") {
                setIsDark(false);
                return
            }
            setIsDark(true)
            return
    
       
        }
        const defaultCurrentMode=document.documentElement.getAttribute('data-mode')
        if(!defaultCurrentMode)return
        localStorage.setItem('theme',defaultCurrentMode)
        
        if (defaultCurrentMode == "light") {
            setIsDark(false);
            return
        }
        setIsDark(true)


    //    setIsDark(false)

    }, []);

    return (
        <div>
            <Menu>
                <MenuButton
                    onClick={() => toggleTheme()}
                    className="dark:bg-error inline-flex w-10 h-10 items-center justify-center text-primary border rounded-full  border-primary text-sm/6 font-semibold "
                >
                    {isDark ? (
                        <span className="mdi mdi-moon-waxing-crescent text-2xl"></span>
                    ) : (
                        <span className="mdi mdi-weather-sunny text-2xl"></span>
                    )}
                    {/* <ChevronDownIcon className="size-4 fill-white/60" /> */}
                </MenuButton>
            </Menu>
        </div>
    );
}
