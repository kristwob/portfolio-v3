"use client";
import { Elsie } from "@next/font/google";
import React from "react";

import Button from "./Button";

const DEFAULT_STATE = {
  name: "",
  email: "",
  message: "",
  error: null,
};

export default class Form extends React.Component {
  constructor() {
    super();

    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.messageRef = React.createRef();

    this.state = {
      ...DEFAULT_STATE,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const data = this.state;
    if (data.name == "") {
      this.setState({
        error: "Name is required",
      });
      this.nameRef.current.focus();
      return;
    } else if (!this.isValidEmail(data.email)) {
      this.setState({
        error: "Invalid email, please check again",
      });
      this.emailRef.current.focus();
      return;
    } else if (data.message == "") {
      this.setState({
        error: "Message is required",
      });
      this.messageRef.current.focus();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });

      if (!res.ok || res.status == 400) {
        throw new Error(`Invalid response: ${res.status}`);
      }
      this.setState({ ...DEFAULT_STATE });
      alert("Thank you for contacting me!");
    } catch (error) {
      console.error(error);
      this.setState({ ...DEFAULT_STATE, error });
      alert("There seems to be an error, please try again later");
    }
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  isValidEmail = (email) => {
    // Regular expression for matching email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern and return the result
    return emailPattern.test(email);
  };

  render() {
    return (
      <form className="text-mono" onSubmit={this.handleSubmit}>
        {this.state.error && <p className="">{this.state.error}</p>}
        <div className="flex flex-col gap-2 mt-2">
          <label className="font-mono" htmlFor="name">
            name
          </label>
          <input type="text" name="name" id="name" onChange={this.handleInputChange} value={this.state.name} ref={this.nameRef} />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label className="font-mono" htmlFor="email">
            email
          </label>
          <input type="text" name="email" id="email" onChange={this.handleInputChange} value={this.state.email} ref={this.emailRef} />
        </div>
        <div className="flex flex-col gap-2 mt-2 mb-5">
          <label className="font-mono" htmlFor="message">
            message
          </label>
          <textarea type="text" name="message" id="message" onChange={this.handleInputChange} value={this.state.message} ref={this.messageRef} />
        </div>
        <Button title="send" variant="primary" type="submit" />
      </form>
    );
  }
}
