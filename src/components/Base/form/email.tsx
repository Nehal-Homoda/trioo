import React from "react";

export default function email({ label, placeholder, required, value,onChange }) {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                type="email"
                placeholder={placeholder}
                required={required}
                className="form-input"
            />
        </div>
    );
}
