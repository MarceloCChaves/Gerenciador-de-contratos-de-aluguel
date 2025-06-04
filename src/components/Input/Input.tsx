import type IInputProps from "../../interfaces/IInputProps";

const Input = ({ label, value, onChange, type }: IInputProps) => {
  return (
    <div>
      <label className="block text-sm text-white">{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Input;