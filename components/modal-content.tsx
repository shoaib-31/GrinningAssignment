import React, { useState } from "react";

type FormComponentProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormComponent: React.FC<FormComponentProps> = ({ setOpen }) => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    salaryStatus: "",
    calories: "",
    breakfastMeal: "",
    lunchMeal: "",
    dinnerMeal: "",
  });

  // Handler for input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit p-">
      <h2 className="text-3xl font-bold mb-8">Fill the Form</h2>
      <form className="bg-white rounded p-4" onSubmit={handleSubmit}>
        <div className="mb-4">
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
            Minimum Daily Calorie Intake:
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            htmlFor="breakfastMeal"
          >
            Go-to Meal for Breakfast:
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="breakfastMeal"
            name="breakfastMeal"
            value={formData.breakfastMeal}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lunchMeal"
          >
            Go-to Meal for Lunch:
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="lunchMeal"
            name="lunchMeal"
            value={formData.lunchMeal}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dinnerMeal"
          >
            Go-to Meal for Dinner:
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="dinnerMeal"
            name="dinnerMeal"
            value={formData.dinnerMeal}
            onChange={handleChange}
            required
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
