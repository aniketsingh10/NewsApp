import mongoose from "mongoose";

const Connection = async (username,password) => {
  const URL = `mongodb://${username}:${password}@ac-ydzxc6c-shard-00-00.dge41bq.mongodb.net:27017,ac-ydzxc6c-shard-00-01.dge41bq.mongodb.net:27017,ac-ydzxc6c-shard-00-02.dge41bq.mongodb.net:27017/?ssl=true&replicaSet=atlas-8cwgci-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database Connected");

  } catch (error) {
    console.log("Error while connecting with database", error);
  }
};

export default Connection;