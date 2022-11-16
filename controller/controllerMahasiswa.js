const {Mahasiswa,KRS} = require("../models")
class MahasiswaController {
    static async getMahasiswa (req,res){
        try {
            let data = await Mahasiswa.findAll({include:KRS})
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
        }
    }
    static async addMahasiswa (req,res){
        try {
            let {name} = req.body
            let data = await Mahasiswa.create({name})
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
        }
    }
    static async deleteMahasiswa (req,res){
        try {
            let id = req.params.id
            let data = await Mahasiswa.destroy({where:{id}})

            
            if (!data) {
                res.status(404).json({message:"data tidak ada"})
            }
            res.status(201).json({message:"sukses deleted mahasiswa"})
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
        }
    }
    static async editMahasiswa (req,res){
        try {
            let id = req.params.id
            let {name} = req.body
          
             await Mahasiswa.update({name},{where:{id}})
            res.status(201).json({message:"sukses edit mahasiswa"})
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
        }
    }
}

module.exports =  MahasiswaController