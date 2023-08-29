import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI;
if (!mongo_uri) {
  throw new Error("Please define the MONGO_URI environment.");
}

async function dbConnect() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
}

export default dbConnect;
