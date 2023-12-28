import classNames from "classnames";

function Button({ children, classes, primary, outline, ...rest }) {
  const className = classNames(
    "hover:opacity-100 px-3 py-1.5 rounded border mb-4",
    primary && "bg-blue-500 text-white",
    outline &&
      "border-blue-500 bg-slate-50 border text-blue-600 font-semibold hover:bg-purple-100",
    classes
  );
  return (
    <button className={className} type="submit" {...rest}>
      {children}
    </button>
  );
}

export default Button;
