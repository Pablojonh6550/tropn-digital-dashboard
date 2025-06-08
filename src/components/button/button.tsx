"use client";
import styled from 'styled-components';

const Button = styled.button`
  background-color: #cc6237;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  padding: 10px 25px;
  height: 40px;
  border: none;
  border-radius: 50px;
  width: 100%;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b2552f;
  }

  &:focus {
    outline: none;
  }
`;


export default Button;
