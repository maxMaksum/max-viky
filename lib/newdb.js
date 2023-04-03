const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
// mongodb://localhost:27017/lasem
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB server.');
  } catch (error) {
    console.error(error);
  }
};

export default connectToDatabase;
