/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URI:
      "mongodb+srv://user:nextcrud@cluster0.jcoosl3.mongodb.net/NEXT-CRUD?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
