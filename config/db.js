import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI;
if (!mongo_uri) {
  throw new Error("Please define the MONGO_URI environment.");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // bufferCommands: false,
      // bufferMaxEntries: 0,
      // useFindAndModify: false,
      // useCreateIndex: true,
    };

    cached.promise = mongoose.connect(mongo_uri, options).then((mongoose) => {
      return mongoose;
    });
    console.log("new conn");
  }
  cached.conn = await cached.promise;
  console.log("cached conn");
  return cached.conn;
}

export default dbConnect;
