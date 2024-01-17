'use client'

import {  type SubmitHandler } from "react-hook-form";
import {  type formInputPost } from "~/types";
import FormPost from "~/components/FormPost";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<formInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="my-4 text-center text-2xl font-bold">Add new Post</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
};

export default CreatePage;
