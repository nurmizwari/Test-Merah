
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
    static async addKRS (req,res){
        try {
            let {MahasiswaId,MataKuliahId} = req.body
            let data = await KRS.create( {MahasiswaId,MataKuliahId})
            console.log(data)
            res.status(201).json({message:"success add data krs"})
        } catch (error) {
           console.log(error); 
           res.status(500).json({message:"Internal server error"})
        }
    }
    static async editKRS (req,res){
        try {
            let id = req.params.id
            let {MahasiswaId,MataKuliahId} = req.body
            let data = await KRS.update( {MahasiswaId,MataKuliahId},{where:{id}})
            console.log(data)
            res.status(201).json({message:"success edit data krs"})
        } catch (error) {
           console.log(error); 
           res.status(500).json({message:"Internal server error"})
        }
    }
    static async deleteKRS (req,res){
        try {
            let id = req.params.id
            let data = await KRS.destroy({where:{id}})
            console.log(data)
            res.status(201).json({message:"success delete data krs"})
        } catch (error) {
           console.log(error); 
           res.status(500).json({message:"Internal server error"})
        }
    }
}

module.exports = KrsController