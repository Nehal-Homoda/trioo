import React from "react";

export default function dropDown({ label, items }) {
    return (
        <div>
            <label className="block" htmlFor={label}>
                {label}
            </label>
            <div className="form-input">
                <select id={label} className="w-full bg-transparent">
                    {items.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
