import { login, post } from "../api/apiService";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="flex px-6">
      <div className="flex-1">
        <img
          src="https://images.inc.com/uploaded_files/image/1920x1080/getty_158673029_9707279704500119_78594.jpg"
          alt="Login Page"
          className="max-w-full h-auto"
        />
      </div>

      <div className="flex-1 p-8 bg-orange-600 text-white">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold mb-4">Veuillez s'authentifier!</h2>
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
          <div className="flex justify-between items-center -mt-4">
            <div></div>
            <div className="hover:underline cursor-pointer">
              Mot de passe oublié?
            </div>
          </div>
          <Button outline type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
