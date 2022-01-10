var mongoose = require('mongoose');

mongoose.connect("mongodb://Vasu:vasu@cluster0-shard-00-00.6vuhk.mongodb.net:27017,cluster0-shard-00-01.6vuhk.mongodb.net:27017,cluster0-shard-00-02.6vuhk.mongodb.net:27017/phoneDirectory?ssl=true&replicaSet=atlas-9z2pl1-shard-0&authSource=admin&retryWrites=true&w=majority");

collectionSchema = mongoose.Schema({
    name: 
    {   
        type: String
    },
    phoneNumber: Number
});

collectionModel = mongoose.model('name-contact', collectionSchema);

module.exports = collectionModel;