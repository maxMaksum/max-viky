const mongoose = require('mongoose');

// mongodb://localhost:27017/lasem
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://lasem:sigma1234@cluster0.636teuc.mongodb.net/service?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB server.');
  } catch (error) {
    console.error(error);
  }
};

export default connectToDatabase;
