"use client";

import { type SubmitHandler } from "react-hook-form";
import { type formInputPost } from "~/types";
import FormPost from "~/components/FormPost";
import BackButton from "~/components/BackButton";

const CreatePage = () => {
  const handleCreatePost: SubmitHandler<formInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton/>
      <h1 className="my-4 text-center text-2xl font-bold">Add new Post</h1>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;
