import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { TodoContext } from "./Todocontext";

const Create = () => {
  // const { todos, settodos } = props;
  // const [title, settitle] = useState("");
  const [todos, settodos] = useContext(TodoContext)


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, } = useForm();


  //react use from validations

  const submithandler = (data) => {

    // data.id = nanoid();
    // data.isCompleted = false;
    // settodos([...todos, data]);

    let newtodo = {
      id: nanoid(),
      title: data.title,
      description: data.description,
      isCompleted: false,
      isImportant: data.isImportant || false,
    };
    // settodos([...todos, newtodo]);
    const updatedTodos = [...todos, newtodo];
    settodos(updatedTodos);
    

    localStorage.setItem("task", JSON.stringify(updatedTodos))

    toast.success("Todo Created Successfully")


    reset();
  };
  // console.log(todos);


  // const submithandler = (e) => {
  //   e.preventDefault();

  //   let newtodo = {
  //     id: nanoid(),
  //     title: title,
  //     isCompleted: false,
  //   };
  //   settodos([...todos, newtodo]);

  //   settitle("");
  // };
  // console.log(todos);

  return (
    <div className="sm:w-[60%] w-full  sm:h-screen flex items-start justify-center  ">
      <div className="sm:w-[58%] w-full p-4 py-10 rounded-xl ">
        <h1 className="text-3xl sm:text-4xl font-semibold capitalize text-white mb-3 text-center">
          Create Todo Tasks
        </h1>

        <form className="flex  flex-col gap-2" onSubmit={handleSubmit(submithandler)}>
          <input {...register("title", { required: "Title cannot be Empty" })}
            className="w-full border border-gray-600 bg-gray-700 rounded-md  p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="title"
          />
             <small className="text-red-300 text-thin capitalize">{errors?.title?.message}</small> 
          <textarea {...register("description")}
            className="w-full border border-gray-600 bg-gray-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="description"
          />
          {/* <small className="text-red-300 text-thin capitalize">{errors?.title?.message}</small> */}


          {/* Mark as Important checkbox */}
          <label className="flex items-center gap-3 mt-3 text-white text-sm">
            <input
              type="checkbox"
              {...register("isImportant")}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            Mark as Important
          </label>


          <button
            className="self-center mt-3 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
 
  );
};

export default Create;
