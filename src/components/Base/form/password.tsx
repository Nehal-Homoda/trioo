"use client";

import React, { useState } from "react";
export default function ({ label, placeholder, required, value, onchange }) {
    const [isShow, setIsShow] = useState(false);
    const handleShowPass = () => {
        setIsShow(!isShow);
    };
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <div className="form-input flex  ">
                <input
                    value={value}
                    onChange={onchange}
                    type={isShow ? "text" : "password"}
                    placeholder={placeholder}
                    required={required}
                    className="w-full focus:outline-none"
                />
                <span
                    onClick={() => handleShowPass()}
                    className={
                        isShow
                            ? "mdi mdi-eye-outline cursor-pointer"
                            : "mdi mdi-eye-off-outline cursor-pointer"
                    }
                ></span>
            </div>
        </div>
    );
}
