import { Component } from "react";
import Input from "../../components/Input";
import { withRouter } from "../../withRouter";
import api from "../../services/api";

interface RegisterProps {
  navigate: any;
}

interface FormState {
  name: string;
  email: string;
  password: string;
  phone: string;
  isFormValid: boolean;
}

export class Register extends Component<RegisterProps, FormState> {
  state: FormState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    isFormValid: false,
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, password, phone } = this.state;

    if (name !== "" && email !== "" && password !== "" && phone !== "") {
      const userData = { name, email, password, phone };
      api
        .register(userData)
        .then((response) => {
          console.log(response.data);
          this.props.navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value || "",
    }));
  };

  render() {
    return (
      <div className="relative xl:flex xl:w-screen xl:h-screen">
        <div className="w-screen xl:w-1/2">
          <div
            className="h-screen bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url("/register.jpg")`,
              zIndex: -1,
            }}
          ></div>
        </div>
        <div className="hidden xl:block xl:w-1/2 p-8 xl:mt-20 ml-10">
          <h1 className="text-3xl font-bold mb-4">Register</h1>
          <h3 className="text-xl font-bold mb-4">Register new account</h3>
          <form onSubmit={this.handleSubmit}>
            <Input
              label="Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <Input
              label="Phone"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <div className="flex items-center justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="xl:hidden absolute inset-0 flex flex-col items-center justify-center p-8 xl:w-1/2">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#F8FCDA" }}>
            Register
          </h1>
          <h3 className="text-xl font-bold mb-4" style={{ color: "#F8FCDA" }}>
            Register new account
          </h3>
          <form onSubmit={this.handleSubmit}>
            <Input
              label="Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              customColor="#F8FCDA"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              customColor="#F8FCDA"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <Input
              label="Phone"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              customColor="#F8FCDA"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              customColor="#F8FCDA"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
