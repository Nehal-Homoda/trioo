import React from "react";

export default function dropDown({ label, items,value,onchange }) {
    return (
        <div>
            <label className="block" htmlFor={label}>
                {label}
            </label>
            <div className="form-input">
                <select id={label}  onChange={onchange} className="w-full bg-transparent">
                    {items.map((item, index) => (
                        <option key={index} value={item.id} >
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
