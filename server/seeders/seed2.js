const db = require('../config/connection');
const { Order } = require('../models');
const orderSeeds = require('./orders.json');

db.once('open', async () => {
  try {
    await Order.deleteMany({});
    await Order.create(orderSeeds);

  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  console.log(orderSeeds)
  process.exit(0);
});