import { supabase } from "@/lib/supabaseClient";

export const getImageUrl = (bucket, path) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};
