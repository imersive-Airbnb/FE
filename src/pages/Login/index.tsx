import { Component } from "react";
import Input from "../../components/Input";
import { withRouter } from "../../withRouter";

interface LoginProps {
  navigate: any;
}
export class Login extends Component<LoginProps> {
  handleRegisterClick = () => {
    const { navigate } = this.props;
    navigate("/register");
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
          <h3 className="text-xl font-bold mb-4">Login into your account or you can register</h3>
          <form>
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
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
          <form>
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              customColor="#F8FCDA"
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              customColor="#F8FCDA"
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
