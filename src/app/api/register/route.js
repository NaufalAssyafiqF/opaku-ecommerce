import { supabase } from "@/app/utils/supabaseClient";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  try {
    const dateId = new Date().getTime();

    const inputData = {
      id: dateId,
      username: body.username,
      password: body.password,
    };

    const { data, error } = await supabase.from("user").insert(inputData);

    if (!error) {
      return NextResponse.json(
        {
          isLogin: true,
          message: "register Success",
        },
        { status: 200 }
      );
    }else {
      return NextResponse.json(
        {
          isLogin: false,
          message: "register Failed",
          error: error.message,
        },
        { status: 400 }
      );
    }

  } catch (error) {
    return NextResponse.json(
      {
        isLogin: false,
        message: "register Failed",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
