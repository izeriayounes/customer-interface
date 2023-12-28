import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { post } from "../api/apiService";

const RegisterForm = () => {
  const { register, handleSubmit, setError, formState } = useForm();
  const { errors } = formState;
  const onSubmit = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      }
      console.log("im here");
      await post("/authentication/newuser", data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 text-white">
      <h2 className="text-2xl font-semibold mb-4">
        Remplir les informations suivantes.
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center space-x-2">
          <Input
            label="Nom"
            id="firstName"
            type="text"
            register={register}
            required
          />
          <Input
            label="Prenom"
            id="lastName"
            type="text"
            register={register}
            required
          />
        </div>
        <Input label="CIN" id="cin" type="text" register={register} required />
        <Input
          label="Email"
          id="email"
          type="email"
          register={register}
          required
        />
        <Input
          label="Password"
          id="password"
          type="password"
          register={register}
          required
        />
        <Input
          label="Confirm password"
          id="confirmPassword"
          type="password"
          required
        />
        {errors.confirmPassword && (
          <div className="text-sm text-yellow-300 -mt-4 text-right">
            {errors.confirmPassword.message}
          </div>
        )}
        <Button outline>Register</Button>
      </form>
    </div>
  );
};

export default RegisterForm;
