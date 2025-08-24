import React from "react";
import { ButtonProps } from "@/interfaces/Button/buttonInterface";

const Button: React.FC<ButtonProps> = (props) => {
  return <button className="button" type={props.type}>{props.label}</button>;
}

export default Button;
