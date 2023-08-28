import { NextResponse } from "next/server";
import TestModel from "../../../models/testModel";
import dbConnect from "@/config/db";

dbConnect();

// dont use default export here

// export async function GET(req, res) {
// console.log("GET ALL CUSTOMERS");
// let { name, phoneNumber, email } = await req.json();
// console.log(req);

// if (name && phoneNumber && email) {
//   let obj = new Customer({ name, phoneNumber, email });

//   obj = await obj.save();

//   return NextResponse.json({ success: true, Customer: obj }, { status: 201 });
// } else {
//   return NextResponse.json(
//     { success: false, Customer: null },
//     { status: 404 }
//   );
// }

//   return NextResponse.json({ msg: "Hello World" }, { status: 200 });
// }

export async function GET(req, res) {
  console.log("GET");
  return NextResponse.json(
    { hello: "world" },
    {
      status: 200,
    }
  );
}
