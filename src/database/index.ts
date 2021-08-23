import { connect } from 'mongoose';

require('dotenv').config({
  path: (process.env.NODE_ENV || '').trim() === 'local' ? 'local' : '.env.dev'
});

class ConnectionDb {
  async connect(): Promise<void> {
    const options: {
      useUnifiedTopology: boolean,
      useNewUrlParser: boolean,
      useFindAndModify: boolean
    } = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    };

    const mongouri: string = <string>process.env.MONGO_URI;
    await connect(mongouri, options);
  }
}

export default new ConnectionDb().connect;