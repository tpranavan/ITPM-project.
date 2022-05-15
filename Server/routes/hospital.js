const express = require("express");
const router = express.Router();
const Hospital = require("../models/hospital");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "./uploads/");
  },
  filename: function (req, file, cd) {
    cd(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cd) => {
  //reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cd(null, true);
  } else {
    cd(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

//GET ALL THE DOCTORS' DETAILS
router.get("/", async (req, res) => {
  try {
    const hospital = await Hospital.find();
    res.json(hospital);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT DOCTORS INFORMATION
// router.post('/', upload.single('selectedFile'), async (req, res) => {
router.post("/", async (req, res) => {
  console.log(req.body.selectedFile);
  const hospital = new Hospital({
    name: req.body.name,
    location: req.body.location,
    contact: req.body.contact,
    warddetails: req.body.warddetails,
    staffcount: req.body.staffcount,
    image: req.body.image,
   
    // selectedFile: req.body.selectedFile,
  });

  try {
    const savedHospital = await hospital.save();
    res.json(savedHospital);
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECIFIC POST
router.get("/:hospitalId", async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.hospitalId);
    res.json(hospital);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE SPECIFIC POST
router.delete("/:hospitalId", async (req, res) => {
  // Hospital.remove({_id:req.params.hospitalId})
  try {
    const removeHospital = await Hospital.remove({ _id: req.params.hospitalId });
    res.json(removeHospital);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE A DOCTORS DETAILS
router.patch("/:hospitalId", upload.single("selectedFile"), async (req, res) => {
  try {
    const updateDoctor = await Hospital.updateOne(
      { _id: req.params.hospitalId },
      {
        $set: {
            name: req.body.name,
            location: req.body.location,
            contact: req.body.contact,
            warddetails: req.body.warddetails,
            staffcount: req.body.staffcount,
            image: req.body.image,
     
          //   selectedFile: req.body.selectedFile,
        },
      }
    );
    res.json(updateDoctor);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
