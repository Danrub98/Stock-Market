const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const stockSchema = require('./Stock');


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },

  orders: [
    {
      owner_id : {type: String},
      unit_price : {type: Number},
      total_price : {type: Number},
      quantity : {type: Number},
      stocks: [
        {
          ticker : {type: String},
          name : {type: String }
        }
      ]
    }
  ],

});

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

const User = model("User", userSchema);

module.exports = User;
