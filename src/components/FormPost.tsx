"use client";

import { type FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type formInputPost } from "~/types";

interface formPostProps {
  submit: SubmitHandler<formInputPost>;
}

const FormPost: FC<formPostProps> = ({ submit }) => {
  const { register, handleSubmit } = useForm<formInputPost>();

  return (
    <form
      className="mt-10 flex flex-col items-center justify-center gap-5"
      onSubmit={handleSubmit(submit)}
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        className="textarea textarea-bordered w-full max-w-lg"
        {...(register("content"), { required: true })}
        placeholder="Post content..."
      ></textarea>
      <select
        className="select select-bordered w-full max-w-lg"
        {...(register("tag"), { required: true })}
        defaultValue={''}
      >
        <option disabled value=''>
          Select tags
        </option>
        <option>JavaScript</option>
        <option>PHP</option>
        <option>Python</option>
      </select>
      <button
        className="btn btn-primary w-full max-w-lg text-white"
        type="submit"
      >
        CREATE
      </button>
    </form>
  );
};

export default FormPost;
