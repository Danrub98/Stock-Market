// Here we are requesting the schema and the model from mongoose db
const { Schema, model } = require("mongoose");
// Here we are requiring bcrypt for the authentication
const bcrypt = require("bcrypt");

// Here we are creating the user model schema
// So our user has
const userSchema = new Schema({

  // An username
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // An email
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  // A password
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // And the user has orders
  orders: [
    {
      // And the orders are coming from the Stock model, cause the user has stocks
      type: Schema.Types.ObjectId,
      ref: "Stock",
    },
  ],
});

// This section is for the authentication part
// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});


userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `stockCount` with the number of ouned stocks we have
userSchema.virtual('stockCount').get(function () {
  return this.orders.length;
});

const User = model("User", userSchema);

module.exports = User;
