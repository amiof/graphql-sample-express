import { mongoose } from "mongoose";
export function connectdb() {
  mongoose.set("strictQuery", false);
  if (mongoose.connections[0].readyState) return console.log("connection is ready ");
  mongoose.connect("mongodb://localhost:27017/graphql", (error) => {
    if (error) return console.log(error);
    console.log("connected sucsessfully to db");
  });
}
