import React from "react";
import { Metadata } from "next";
import SignInForm from "@/components/forms/signin/form";

export const metadata: Metadata = {
    title: "Login",
    description: "Login",
};

const LoginScreen = () => {
    return (<SignInForm />);
}

export default LoginScreen;