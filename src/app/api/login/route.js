import { supabase } from "@/app/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  try {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("username", body.username)
      .eq("password", body.password);

    if (error) {
      return NextResponse.json(
        {
          isLogin: false,
          message: "error when get data from database",
        },
        { status: 400 }
      );
    }

    if (data.length > 0) {
      return NextResponse.json(
        {
          isLogin: true,
          message: "Login Success",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          isLogin: false,
          message: "Username or Password is wrong",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        isLogin: false,
        message: "Login Failed",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
