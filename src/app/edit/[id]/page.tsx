"use client";

import { type SubmitHandler } from "react-hook-form";
import { type formInputPost } from "~/types";
import FormPost from "~/components/FormPost";
import BackButton from "~/components/BackButton";

const EditPostPage = () => {
  const handleEditPost: SubmitHandler<formInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton/>
      <h1 className="my-4 text-center text-2xl font-bold">Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing/>
    </div>
  );
};

export default EditPostPage;
