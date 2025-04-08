"use client";

import FormCard from "@/components/Base/formCard";
import React, { useState } from "react";
import TextInput from "@/components/Base/form/textInput";
import Password from "@/components/Base/form/password";
import PhoneNumber from "@/components/Base/form/phoneNumber";
import Email from "@/components/Base/form/email";
import DropDown from "@/components/Base/form/dropDown";

const CountryItems = [
    { id: "0", name: "select country" },
    { id: "1", name: "egypt" },
    { id: "2", name: "emirates" },
    { id: "3", name: "saudi" },
];
const cityItems = [
    { id: "0", name: "select city" },
    { id: "1", name: "Gharbia" },
    { id: "2", name: "cairo" },
    { id: "3", name: "alex" },
];
const fd = new FormData();
export default function page() {
    const [fName, setFName] = useState("");
    const [Lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState(CountryItems[0]);
    const [city, setCity] = useState(cityItems[0]);
    const [phone, setPhone] = useState({ code: "", number: "" });

    fd.append("name", fName);
    fd.append("phone_number", phone.number);
    fd.append("password", password);
    fd.append("email", email);
    fd.append("country_code", country.name);

    const handleEmailChanged = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChanged = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPasswordChanged = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleFnameChanged = (e) => {
        setFName(e.target.value);
    };
    const handleLnameChanged = (e) => {
        setLastName(e.target.value);
    };
    const handleSelectedCountry = (e) => {
        setCountry(e.target.value);
    };
    const handleSelectedCity = (e) => {
        setCity(e.target.value);
    };
    const handleChangedPhone = (code, number) => {
        setPhone({ code: code, number: number });
    };
    console.log(phone);
    return (
        <div>
            <FormCard title="welcome to snd" className="w-[600px]">
                <form>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="">
                            <TextInput
                                value={fName}
                                onchange={handleFnameChanged}
                                placeholder="first name"
                                label="First Name"
                                required={true}
                            />
                        </div>
                        <div className="">
                            <TextInput
                                value={Lname}
                                onchange={handleLnameChanged}
                                placeholder="last name"
                                label="Last Name"
                                required={true}
                            />
                        </div>
                        <div className="">
                            <DropDown
                                value={country}
                                onchange={handleSelectedCountry}
                                items={CountryItems}
                                label="country"
                            />
                        </div>
                        <div className="">
                            <Email
                                value={email}
                                onChange={handleEmailChanged}
                                placeholder="enter your email"
                                label="Email"
                                required={true}
                            />
                        </div>
                        <div className="">
                            <PhoneNumber
                                value={phone.number}
                                onchange={handleChangedPhone}
                                placeholder="phone number"
                                label="Phone number"
                                required={true}
                            />
                        </div>
                        <div>
                            <DropDown
                                value={city}
                                onchange={handleSelectedCity}
                                label="City"
                                items={cityItems}
                            />
                        </div>

                        <div className="">
                            <Password
                                onchange={handlePasswordChanged}
                                value={password}
                                placeholder="password"
                                label="Password"
                                required={true}
                            />
                        </div>
                        <div className="">
                            <Password
                                onchange={handleConfirmPasswordChanged}
                                value={confirmPassword}
                                placeholder="confirm password"
                                label="Confirm Password"
                                required={true}
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="conditions"
                            name="conditions"
                            value=""
                        />
                        <label htmlFor="conditions">
                            {" "}
                            I agree to terms & conditions
                        </label>
                        <br />
                        <input
                            type="checkbox"
                            id="informed"
                            name="informed"
                            value=""
                        />
                        <label htmlFor="informed">
                            I'd like to stay informed about the latest news and
                            tips
                        </label>
                    </div>

                    <button className="form-button">Agree and continue</button>
                </form>
            </FormCard>
        </div>
    );
}
