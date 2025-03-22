import { supabase } from "./supabaseClient";

export const signUp = async (name, email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name }, // Simpan nama di metadata
    },
  });

  if (error) throw error;
  return data;
};
