const db = require('../config/connection');
const { User, Stock } = require('../models');
const userSeeds = require('./userSeeds.json');
const stockSeeds = require('./stocks.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Stock.deleteMany({});
    await User.create(userSeeds);
    await Stock.create(stockSeeds);

  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  console.log(userSeeds)
  console.log(stockSeeds);
  process.exit(0);
});