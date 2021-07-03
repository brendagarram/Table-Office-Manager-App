
exports.key = 'kimochi69*';
exports.port = process.argv[2] || process.env.PORT || 8000;
exports.dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/';
