function Input({ label, id, type, register, ...rest }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        className="text-black
        mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 block w-full sm:text-sm"
        name={id}
        id={id}
        {...(register !== null &&
          register !== undefined && { ...register(id) })}
        type={type}
        {...rest}
      />
    </div>
  );
}

export default Input;
