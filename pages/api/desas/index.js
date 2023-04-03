// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDatabase from "../../../lib/newdb"
import {Customer, Desa} from "../../../models"


export default  async function handler(req, res) {
  if(req.method == "GET"){
  const db = await connectToDatabase();
  // Retrieve all documents
  // console.log("ok")
const pagination = req.body.pagination ? parseInt(req.body.pagination) : 10;
const pageNumber = req.body.page ? parseInt(req.body.page) : 1;
  const person = await Desa.find({})
  .sort({"nama":1})
 

  // console.log(req.body)

  res.status(200).json(person)

  }
if(req.method == "POST"){
  const db = await connectToDatabase();
  try {
    const { rm,name, teacherId,
      desaId, rt,rw} = req.body;

      async function insertDocuments() {
        try {
          // Insert the documents into the collection using insertMany
          const result = await person.insertMany(personData);
          //  const result = await desa.insertMany(namaDesa);
          console.log('Documents inserted:', result);
        } catch (error) {
          console.error(error);
        }
      }
      
      // Call the async function to insert the documents
      insertDocuments();

    return res.status(200).json({ name: 'John Doe' });
  } 
  catch (error) {
    console.log(error);
    return res.status(400).end();
  }

} 

  
}
