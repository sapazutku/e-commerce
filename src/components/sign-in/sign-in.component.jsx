import React from "react";
import "./sign-in.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target; // works with password and email
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            className="email"
            name="email"
            type="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleChange} // writing on state
            required
          />
          <FormInput
            className="password"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange} // writing on state
            required
          />
          <CustomButton className="submit" type="submit" value="Sign In">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignInPage;
