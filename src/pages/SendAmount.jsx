import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { get } from "../api/apiService";

export default function SendAmount() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await get(data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="max-w-l mx-auto mt-8 text-white flex items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Enter the customer RIB:"
          maxLength={16}
          id="identifier"
          type="number"
          register={register}
          required
        />
        <Input
          label="Enter the sum you want send:"
          id="amount"
          type="number"
          register={register}
          required
        />
        <Button primary>Send amount</Button>
      </form>
    </div>
  );
}
