import React from "react";

export default function email({label,placeholder,required}) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                type="email"
                placeholder={placeholder}
                required={required}
                className="form-input"
            />
        </div>
    );
}
