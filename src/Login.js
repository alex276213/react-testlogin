import React from "react";
import LanguageSelectComponent from "./changeLanguage.js";

class LoginFromComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
      toEng: true
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    const target = event.target;
    if (target.type === "text") {
      this.setState({
        user: target.value
      });
    } else {
      this.setState({
        pwd: target.value
      });
    }
  }

  onSubmitHandler(event) {
    //event.preventDefault();
    if (!this.state.user) {
      console.log("please fill in the user!");
    }
    if (!this.state.pwd) {
      console.log("please fill in the password!");
    }
    console.log(
      "User " +
        this.state.user +
        " Password " +
        this.state.pwd +
        " Language " +
        (this.state.toEng ? "English" : "Chinese")
    );
  }

  render() {
    return (
      <form>
        <label>
          <p>User: </p>
          <input
            type="text"
            name="user"
            value={this.state.name}
            onChange={this.onChangeHandler}
          />
        </label>
        <label>
          <p>Password: </p>
          <input
            type="password"
            name="user"
            value={this.state.pwd}
            onChange={this.onChangeHandler}
          />
        </label>
        <div>
          <LanguageSelectComponent {...this.state} />
        </div>
        <button onClick={this.onSubmitHandler}>submit</button>
      </form>
    );
  }
}
export default LoginFromComponent;
