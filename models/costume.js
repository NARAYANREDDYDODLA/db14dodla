const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {type: String, maxlength: 5}, 
 cost:{ type: Number, min: 5, max: 35 }
},{
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }}) 
 
module.exports = mongoose.model("Costumes", 
costumeSchema) 