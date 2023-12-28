import { post } from "../api/apiService";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";

export default function FeedClientBalance() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await post(data);
      window.location.pathname = "/";
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="max-w-l mx-auto mt-8 text-white flex items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Enter the client CIN:"
          maxLength={10}
          register={register}
          id="cin"
        />
        <Input
          label="Enter the sum of money:"
          type="number"
          register={register}
          id="amount"
        />
        <Button primary>Send amount</Button>
      </form>
    </div>
  );
}
