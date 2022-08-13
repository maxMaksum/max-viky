
import Cusomer from '../../model/RM';
import data from '../../data';
import db from '../../lib/db';

const handler = async (req, res) => {
  await db.connect();
  await Cusomer.deleteMany();
  await Cusomer.insertMany(data);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;