const db = require('../config/connection');
const { User, Stock } = require('../models');
const userSeeds = require('./userSeeds.json');
const stocksSeeds = require('./stocks.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Stock.deleteMany({});
    await User.insertMany(userSeeds);
    await Stock.insertMany(stocksSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  try {


  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  console.log(userSeeds)
  console.log(stocksSeeds)
  process.exit(0);
});