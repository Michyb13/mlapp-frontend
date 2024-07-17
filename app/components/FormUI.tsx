import React, { ChangeEvent } from "react";

type UIprops = {
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      Education: string;
      Experience: number;
      Location: string;
      Job_Title: string;
      Age: number;
      Gender: string;
    }>
  >;
  salary: number | undefined;
  error: string;
};

const FormUI = ({ handleSubmit, setFormData, salary, error }: UIprops) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 p-5">
          <div className="flex flex-col">
            <label htmlFor="education" className="font-bold mb-1">
              Education Level
            </label>
            <select
              id="education"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    Education: e.target.value,
                  };
                });
              }}
            >
              <option selected disabled value="">
                Choose appropriate option
              </option>
              <option value="High School">High School Degree</option>
              <option value="Bachelor">Bachelor Degree</option>
              <option value="Master">Masters Degree</option>
              <option value="PhD">PhD Degree</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="experience" className="font-bold mb-1">
              Years of Experience
            </label>
            <input
              type="number"
              id="experience"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              max="55"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    Experience: parseInt(e.target.value),
                  };
                });
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="location" className="font-bold mb-1">
              Location
            </label>
            <select
              id="location"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    Location: e.target.value,
                  };
                });
              }}
            >
              <option selected disabled value="">
                Choose appropriate option
              </option>
              <option value="Rural">Rural</option>
              <option value="Suburban">Suburban</option>
              <option value="Urban">Urban</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="job-title" className="font-bold mb-1">
              Job Title
            </label>
            <select
              id="job-title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    Job_Title: e.target.value,
                  };
                });
              }}
            >
              <option selected disabled value="">
                Choose appropriate option
              </option>
              <option value="Analyst">Analyst</option>
              <option value="Director">Director</option>
              <option value="Engineer">Engineer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="font-bold mb-1">
              Age
            </label>
            <input
              type="number"
              id="age"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              max="70"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    Age: parseInt(e.target.value),
                  };
                });
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="font-bold mb-1">
              Gender
            </label>
            <select
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setFormData((prev) => {
                  return {
                    ...prev,
                    Gender: e.target.value,
                  };
                });
              }}
            >
              <option selected disabled value="">
                Choose appropriate option
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Predict
          </button>
        </div>
      </form>
      <span className="mt-6 text-2xl text-center block">
        {salary !== undefined
          ? `Your predicted Salary is $${salary.toFixed(2)}`
          : ""}
      </span>
      <span className="mt-6 text-2xl text-center block">
        {error && <h3 className=" text-red-500">{error}</h3>}
      </span>
    </div>
  );
};

export default FormUI;
