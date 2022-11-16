
const {KRS} = require("../models")

class KrsController {
    static async getKRS (req,res){
        try {
            let data = await KRS.findAll()
            console.log(data)
            res.status(200).json(data)
        } catch (error) {
           console.log(error); 
           res.status(500).json({message:"Internal server error"})
        }
    }
}

module.exports = KrsController