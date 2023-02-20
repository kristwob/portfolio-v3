"use client";
import React from "react";

import Button from "./Button";

const DEFAULT_STATE = {
  name: "",
  email: "",
  message: "",
};

export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      ...DEFAULT_STATE,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const data = this.state;
    try {
      const res = await fetch("/api/contact", {
        method: "post",
        body: new URLSearchParams(data),
      });

      if (!res.ok || res.status == 400) {
        throw new Error(`Invalid response: ${res.status}`);
      }
      console.log(res)
      this.setState({ ...DEFAULT_STATE });
      alert("Thank you for contacting me!");
    } catch (error) {
      console.error(error);
      this.setState({ ...DEFAULT_STATE });
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

  render() {
    return (
      <form className="text-mono" onSubmit={this.handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">name</label>
          <input required type="text" name="name" id="name" onChange={this.handleInputChange} value={this.state.name} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">email</label>
          <input required type="text" name="email" id="email" onChange={this.handleInputChange} value={this.state.email} />
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="message">message</label>
          <textarea required type="text" name="message" id="message" onChange={this.handleInputChange} value={this.state.message} />
        </div>
        <Button title="send" variant="primary" type="submit" />
      </form>
    );
  }
}
