import React from "react";
import { MdDelete } from "react-icons/md";
import { format } from "date-fns";
import { useAppContext } from "../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Excercise = ({ name, load, reps, createdAt, _id }) => {
  const { deleteEx } = useAppContext();
  const deleteExercise = () => {
    deleteEx(_id)
      .then(() => toast.success("Deleted successfully"))
      .catch(() => toast.error("Something went wrong"));
  };
  return (
    <>
      <ToastContainer />
      <div className="px-3 py-3 bg-gray-200 mb-2 rounded-md flex justify-between items-center">
        <div>
          <h2>Name: {name}</h2>
          <p>Load: {load}</p>
          <p>Reps: {reps}</p>
          <small className="font-semibold">
            {format(new Date(createdAt), "yyyy-MM-dd ")}
          </small>
        </div>
        <div className="cursor-pointer text-2xl text-red-600">
          <MdDelete onClick={deleteExercise} />
        </div>
      </div>
    </>
  );
};

export default Excercise;
