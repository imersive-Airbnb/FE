import { Component } from "react";
import Input from "../../components/Input";
import { withRouter } from "../../withRouter";
import api from "../../services/api";

interface LoginProps {
  navigate: any;
}

interface Credentials {
  email: string;
  password: string;
}

export class Login extends Component<LoginProps> {
  state: Credentials = {
    email: "",
    password: "",
  };

  handleRegisterClick = () => {
    const { navigate } = this.props;
    navigate("/register");
  };

  handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (email !== "" && password !== "") {
      const credentials = { email, password };
      api
        .login(credentials)
        .then((response) => {
          console.log(response.data);
          this.props.navigate("/dashboard");
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
          <h1 className="text-3xl font-bold mb-4">Hello !</h1>
          <h3 className="text-xl font-bold mb-4">
            Login into your account or you can register
          </h3>
          <form onSubmit={this.handleSumbit}>
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={this.state.email}
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
            <div className="flex flex-row gap-x-5 items-center">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={this.handleRegisterClick}
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="xl:hidden absolute inset-0 flex flex-col items-center justify-center p-8 xl:w-1/2">
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#F8FCDA" }}>
            Hello !
          </h1>
          <h3 className="text-xl font-bold mb-4" style={{ color: "#F8FCDA" }}>
            Log in into your account or you can register
          </h3>
          <form onSubmit={this.handleSumbit}>
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
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              customColor="#F8FCDA"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <div className="flex flex-col gap-y-5 items-center">
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={this.handleRegisterClick}
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

export default withRouter(Login);
