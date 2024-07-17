"use client";
import React, { ChangeEvent } from "react";
import FormUI from "./FormUI";

const Form = () => {
  const [formData, setFormData] = React.useState({
    Education: "",
    Experience: 0,
    Location: "",
    Job_Title: "",
    Age: 0,
    Gender: "",
  });
  const [salary, setSalary] = React.useState<number>();
  const [error, setError] = React.useState("");
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.Education === "" ||
      formData.Experience === 0 ||
      formData.Location === "" ||
      formData.Job_Title === "" ||
      formData.Age === 0 ||
      formData.Gender === ""
    ) {
      alert("Please fill out all fields");
      return;
    }
    const formDataJSON = JSON.stringify(formData);
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formDataJSON,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSalary(data.prediction);
    } catch (err: any) {
      console.log(err);
      setError(err.error);
    }
  };

  return (
    <FormUI
      handleSubmit={handleSubmit}
      setFormData={setFormData}
      salary={salary}
      error={error}
    />
  );
};

export default Form;
