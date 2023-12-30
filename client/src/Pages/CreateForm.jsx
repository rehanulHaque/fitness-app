import React, { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateForm = () => {
  const [name, setName] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const { createExercise } = useAppContext();

  const handelSubmit = (e) => {
    e.preventDefault();
    createExercise(name, load, reps)
      .then(() =>{
        toast.success("Created successfully")
        setName("")
        setLoad("")
        setReps("")
      })
      .catch(() => toast.error("Something went wrong"));
  };
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handelSubmit} className="max-w-[400px] mx-auto">
        <div>
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border border-black px-4 py-1 outline-none rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="load" className="block mb-2">
            Load:
          </label>
          <input
            type="text"
            id="load"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            placeholder="Load"
            className="border border-black px-4 py-1 outline-none rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="reps" className="block mb-2">
            Reps:
          </label>
          <input
            type="text"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="Name"
            className="border border-black px-4 py-1 outline-none rounded-md w-full"
          />
        </div>
        <button className="w-full py-3 bg-black text-white mt-4 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
