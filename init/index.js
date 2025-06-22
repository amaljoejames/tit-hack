const mongoose = require("mongoose");
const newData = require("../init/data.js");
const Listing = require("../models/listing.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

main()
  .then(async () => {
    console.log("Connected to database");
    await initDB();  // wait karna yahan important hai
    process.exit();  // init ho gaya toh script exit ho jaye
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  const updatedData = newData.data.map((obj) => ({
    ...obj,
    owner: '68348eb16c11b273f85698a5',  // Make sure this owner ID is valid in your User collection if needed
  }));
  await Listing.insertMany(updatedData);
  console.log("DB initialized with sample listings");
};


