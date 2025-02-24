"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/lib/supabaseStorage";

export default function NewBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [kompartemen, setKompartemen] = useState("");
  const [image, setImage] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      alert("You must be logged in!");
      return;
    }

    let imageUrl = "";
    if (image) {
      imageUrl = await uploadImage(image);
    }

    const { error } = await supabase
      .from("blog")
      .insert([
        { title, content, image_url: imageUrl, user_id: user.id, kompartemen },
      ]);

    if (!error) router.push("/blog");
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          placeholder="insert kompartemen"
          value={kompartemen}
          onChange={(e) => setKompartemen(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 w-full mb-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}
