
const path = require('path');

const rootPath = __dirname;

const dbUrl = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/shop_test': 'mongodb://localhost/PhotoGalery';

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    dbUrl,
    mongoOptions: {
        useNewUrlParser: true,
        useCreateIndex: true
    },
    facebook: {
        appId: '428972884602190',
        appSecret: '68c1d723157ba6bc6110ee10203c2ea4' // insecure!
    }
};
