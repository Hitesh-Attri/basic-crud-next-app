import { NextResponse } from "next/server";
import TestModel from "../../../models/testModel";
import dbConnect from "@/config/db";

dbConnect();

export async function POST(req, res) {
  console.log("GET ALL CUSTOMERS");
  let { text } = await req.json();

  let obj = new TestModel({ text });

  obj = await obj.save();

  return NextResponse.json({ success: true, text: obj }, { status: 201 });
}
