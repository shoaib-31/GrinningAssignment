import React, { useState } from "react";
import { useToast } from "./ui/use-toast";
import { CheckCircle } from "lucide-react";
import { MuiChipsInput } from "mui-chips-input";

type FormComponentProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormComponent: React.FC<FormComponentProps> = ({ setOpen }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<any>({
    salaryStatus: "",
    calories: "",
    goToMeals: [],
  });

  // Handler for input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
    setOpen(false);
    toast({
      title: "Data Saved",
      description: (
        <div className="flex justify-center items-center">
          <CheckCircle className=" text-green-500" />
          &nbsp;Your Response has been saved successfully
        </div>
      ),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit md:w-[35rem]">
      <h2 className="text-3xl font-bold mb-8">Kindly fill the Form</h2>
      <form className="bg-white rounded w-full p-4" onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="salaryStatus"
          >
            Salary Status:
          </label>
          <select
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="salaryStatus"
            name="salaryStatus"
            value={formData.salaryStatus}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="surplus">Surplus</option>
            <option value="deficit">Deficit</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="calories"
          >
            Minimum Daily Calorie Intake (in Kcal):
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-gray-500"
            type="number"
            id="calories"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="goToMeals"
          >
            Your Go-to Meals:
          </label>
          <MuiChipsInput
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:outline-gray-500"
            value={formData.goToMeals}
            onChange={(newChips) => {
              setFormData((prevState: any) => ({
                ...prevState,
                goToMeals: newChips,
              }));
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
