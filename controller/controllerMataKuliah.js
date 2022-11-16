// const {MataKuliah} = require("../models");

const { MataKuliah,KRS } = require("../models");

class MataKuliahAja {
     static async getMataKuliah (req,res){
        try {
            let data = await MataKuliah.findAll()
            console.log(data)
            res.status(200).json(data)
        } catch (error) {
           console.log(error); 
           res.status(500).json({message:"Internal server error"})
        }
    }
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
    static async addMatkul (req,res){
        try {
            let {name,mhsId} = req.body
            let data = await MataKuliah.create({name,mhsId})
            res.status(201).json(data)
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
        }
    }
    static async editMatkul (req,res){
        try {
            let {name,mhsId} = req.body
            let id = req.params.id
            await MataKuliah.update({name,mhsId},{where:{id}})
            res.status(201).json({message:"berhasil edit mata kuliah"})
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
        }
    }
    static async deleteMatkul (req,res){
        try {
            
            let id = req.params.id
            let data = await MataKuliah.destroy({where:{id}})
            if (!data) {
                res.status(404).json({message:"data tidak ada"})
            }
            res.status(200).json({message:"berhasil hapus mata kuliah"})
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Internal server error"})
        }
    }
}

module.exports = MataKuliahAja