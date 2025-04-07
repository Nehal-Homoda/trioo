import AppFooter from "@/components/layout/AppFooter";
import AppNavBar from "@/components/layout/AppNavBar";
import React from "react";


type Props = {
    children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
    return (
        <>
            <AppNavBar />
            {children}
            <AppFooter />
        </>
    );
}
