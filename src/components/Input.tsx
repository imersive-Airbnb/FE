import { Component } from "react";

interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  customColor?: string;
}

class Input extends Component<InputProps> {
  render() {
    const { label, id, type, placeholder, customColor } = this.props;

    const colorClass = customColor ? `text-custom-color` : "";

    return (
      <div className="mb-4">
        <label
          className={`block text-sm font-bold mb-2 ${colorClass}`}
          htmlFor={id}
          style={customColor ? {color: customColor} : undefined}
        >
          {label}
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-blue-500"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Input;
