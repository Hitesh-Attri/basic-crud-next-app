import { NextResponse } from "next/server";
import TestModel from "../../../models/testModel";
import dbConnect from "@/config/db";

export async function GET(req, res) {
  await dbConnect();
  let list = await TestModel.find();
  // console.log(list);

  return NextResponse.json({ success: true, list: list }, { status: 200 });
}
