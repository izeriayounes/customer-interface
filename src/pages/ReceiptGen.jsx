import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Input from "../components/Input";
import { get } from "../api/apiService";

export default function Receipt({ isCustomer, IsEmployee }) {
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
        {isCustomer && (
          <Input
            label="Enter the customer RIB"
            maxLength={10}
            id="rib"
            type="number"
            register={register}
          />
        )}
        {IsEmployee && (
          <Input
            label="Enter the customer CIN"
            id="cin"
            type="text"
            register={register}
          />
        )}
        <Button primary>Print receipt</Button>
      </form>
    </div>
  );
}
