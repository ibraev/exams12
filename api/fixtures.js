const mongoose = require('mongoose');
const nanoid = require('nanoid');
const config = require('./config');
const Gallery = require('./models/Galery');
const User = require('./models/Users');


const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const user =   await User.create({
        username: 'user',
        password: '123',
        role: 'user',
        token: nanoid()
    }, {
        username: 'admin',
        password: '123',
        role: 'admin',
        token: nanoid()
    });

    await Gallery.create(
        {
        user:user[0].username,
        title:'Beautiful',
        image:'gallery-1.jpg'
    },
        {
          user:user[1].username,
          title:'Beautiful',
            image:'gallery-1.jpg'
        }
    );
    return connection.close();
};


run().catch(error => {
    console.error('Something wrong happened...', error);
});
