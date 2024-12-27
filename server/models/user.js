import mongoose from "mongoose";
import validator from 'validator'
const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required:true,
    },
    role: {
         type:String,
         lowercase: true,
         required:true,
     },
    password: {
        type: String, 
        required:true,
        minlength: 6,
    },
    email: {
        type: String, 
        required:true,
        unique: true,
        lowercase: true,
    },
    id: {
        type: String
    },
    registration_date: {
        type: Date, 
        default: Date.now 
    }
});
userSchema.statics.signup = async function(email, password) {

    // validation
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
    if (!validator.isStrongPassword(password)) {
      throw Error('Password not strong enough')
    }
  
    const exists = await this.findOne({ email })
  
    if (exists) {
      throw Error('Email already in use')
    }
  
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({ email, password: hash })
    
  
    return user
  }
  
  // static login method
  userSchema.statics.login = async function(email, password) {
  
    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }

const User =  mongoose.model('User', userSchema);

export default User