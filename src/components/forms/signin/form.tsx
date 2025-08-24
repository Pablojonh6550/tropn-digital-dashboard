'use client';
import React from "react";

import Input from "@/components/input/input";
import Button from "@/components/button/button";

const SignInForm = () => {

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <section className="wrapper">
            <div className="login-container">
                <div className="form-container">
                    <div className="form-content">
                        <img src="logo.png" alt="Logo" width={161} />
                        <div className="title-container">
                            <h2>Bem-vindo de volta</h2>
                            <span className="sub-title">Entre com sua conta para acessar o painel.</span>
                        </div>
                        <div className="form">
                            <Input label="Email" placeholder="Digite aqui" type="email" onChange={changeInput} />
                            <Input label="Senha" placeholder="Digite aqui" type="password" onChange={changeInput} />

                            <Button label="Entrar" type="submit" />
                        </div>
                    </div>
                </div>

                <div className="image-section">
                    <img src="assets/monitoring.png" alt="icon" />
                </div>
            </div>
        </section>
    )
}

export default SignInForm;