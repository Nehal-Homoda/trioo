import React from "react";
import FormCard from "@/components/Base/formCard";
import Link from "next/link";
import PhoneNumber from "@/components/Base/form/phoneNumber";
import Password from "@/components/Base/form/password";

export default function page() {
    return (
        <div>
            <FormCard title="welcome to login" className="w-[500px]">
                <form>
                    <PhoneNumber
                        label="Phone Number"
                        placeholder="enter your phone number"
                        required={true}
                    />

                    <Password
                        label="Password"
                        placeholder="enter your password"
                        required={true}
                    />

                    <Link href="./" className="text-primary">
                        Forget Password ?
                    </Link>

                    <button className="form-button">Login</button>

                    <div className="text-center">
                        <p className="text-primary">or Login with</p>
                        <div className="flex gap-3 justify-center ">
                            <Link href="">
                                <img
                                    className="w-10 h-10 object-contain"
                                    src="/trio-logo.png"
                                    alt=""
                                />
                            </Link>
                            <Link href="">
                                <img
                                    className="w-10 h-10 object-contain"
                                    src="/trio-logo.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                    <Link
                        href="./Register"
                        className="block text-center underline"
                    >
                        Create your account ?
                    </Link>
                </form>
            </FormCard>
        </div>
    );
}
