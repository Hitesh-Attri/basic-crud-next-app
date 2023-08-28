import { NextResponse } from "next/server";
import TestModel from "../../../models/testModel";
import dbConnect from "@/config/db";

dbConnect();

export async function GET(req, res) {
  let list = await TestModel.find();
  // console.log(list);

  return NextResponse.json({ success: true, list: list }, { status: 200 });
}
