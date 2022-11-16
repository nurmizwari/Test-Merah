const router = require("express").Router();
const KrsController = require("../controller/controllerKrs");
const MahasiswaController = require("../controller/controllerMahasiswa");
const MataKuliahAja = require("../controller/controllerMataKuliah");

router.get("/mahasiswa",MahasiswaController.getMahasiswa)
router.post("/mahasiswa",MahasiswaController.addMahasiswa)
router.delete("/mahasiswa/:id",MahasiswaController.deleteMahasiswa)
router.put("/mahasiswa/:id",MahasiswaController.editMahasiswa)



router.get("/matakuliah",MataKuliahAja.getMataKuliah)
router.post("/matakuliah",MataKuliahAja.addMatkul)
router.put("/matakuliah/:id",MataKuliahAja.editMatkul)
router.delete("/matakuliah/:id",MataKuliahAja.deleteMatkul)


router.get("/krs",KrsController.getKRS)


module.exports = router;