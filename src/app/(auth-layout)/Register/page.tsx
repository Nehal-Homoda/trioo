import FormCard from "@/components/Base/formCard";
import React from "react";
import TextInput from "@/components/Base/form/textInput";
import Password from "@/components/Base/form/password";
import PhoneNumber from "@/components/Base/form/phoneNumber";
import Email from "@/components/Base/form/email";
import DropDown from "@/components/Base/form/dropDown";



const CountryItems=['select country','egypt','emirates','saudi'];
const cityItems=['select city','tanta','mansora','giza'];
export default function page() {
    return (
        <div>
            <FormCard title="welcome to snd" className="w-[600px]">
                <form>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="">
                            {/* <label className="block" htmlFor="fName">
                                First Name
                            </label>
                            <input
                                id="fName"
                                type="text"
                                className="form-input"
                            /> */}
                            <TextInput placeholder="first name" label="First Name" required={true} />
                        </div>
                        <div className="">
                            {/* <label className="block" htmlFor="lName">
                                Last Name
                                </label>
                                <input
                                id="LName"
                                type="text"
                                className="form-input"
                                /> */}
                                <TextInput placeholder="last name" label="Last Name" required={true} />
                        </div>
                        <div className="">
                            {/* <label className="block" htmlFor="country">
                                Country
                            </label>
                            <div className="form-input">
                                <select
                                    id="country"
                                    className="w-full bg-transparent"
                                >
                                    <option value="egypt">egypt</option>
                                    <option value="saudi">saudi</option>
                                    <option value="emirates">emirates</option>
                                </select>
                            </div> */}
                            <DropDown items={CountryItems} label="country"/>
                        </div>
                        <div className="">
                            {/* <label className="block" htmlFor="email">
                                email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                            /> */}
                            <Email placeholder="enter your email" label="Email" required={true}/>
                        </div>
                        <div className="">
                            {/* <label className="block" htmlFor="phone">
                                Phone number
                            </label>
                            <input
                                id="phone"
                                type="number"
                                className="form-input"
                            /> */}
                            <PhoneNumber placeholder="phone number" label="Phone number" required={true}/>
                        </div>
                        <div>
                            {/* <label className="block" htmlFor="city">
                                City
                            </label>
                            <div className="form-input">
                                <select
                                    id="city"
                                    className="w-full bg-transparent"
                                >
                                    <option value="cairo">cairo</option>
                                    <option value="alex">alex</option>
                                    <option value="gharbia">gharbia</option>
                                </select>
                            </div> */}
                            <DropDown label="City" items={cityItems}/>
                        </div>

                        <div className="">
                            {/* <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="number"
                                className="form-input"
                            /> */}
                            <Password   placeholder="password" label="Password" required={true}/>
                        </div>
                        <div className="">
                            {/* <label className="block" htmlFor="cPassword">
                                Confirm Password
                            </label>
                            <input
                                id="cPassword"
                                type="number"
                                className="form-input"
                            /> */}
                            <Password placeholder="confirm password" label="Confirm Password" required={true}/>
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
