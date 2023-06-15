import { Component } from "react";
import Input from "../../components/Input";

export class Login extends Component {
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
          <form>
            <Input
              label="Name"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
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
          <form>
            <Input
              label="Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              customColor="#F8FCDA"
            />
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
      </div>
    );
  }
}

export default Login;
