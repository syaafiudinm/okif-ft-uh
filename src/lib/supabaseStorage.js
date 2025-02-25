import { supabase } from "@/lib/supabaseClient";

export async function uploadImage(image) {
  const fileName = `${Date.now()}-${image.name}`;
  const { data, error } = await supabase.storage
    .from("blog-images")
    .upload(fileName, image);

  if (error) {
    console.error("Upload Error : ", error);
    return null;
  }

  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-images/${data.path}`;
}
export function getImageUrl(bucket, filename) {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${filename}`;
}
