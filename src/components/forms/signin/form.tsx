import React from "react";
import "./style.scss";

import Input from "@/components/input/input";
import Button from "@/components/button/button";

const SignInForm = () => {
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
                            <Input />
                            <Input />
                            <Button>Enviar</Button>
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