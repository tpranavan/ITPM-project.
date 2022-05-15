const express = require("express");
const router = express.Router();
const Ambulance = require("../models/Ambulance");
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

// //GET ALL THE DOCTORS' DETAILS
router.get("/", async (req, res) => {
  try {
    const ambulance = await Ambulance.find();
    res.json(ambulance);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT DOCTORS INFORMATION
// router.post('/', upload.single('selectedFile'), async (req, res) => {
router.post("/", async (req, res) => {
  console.log(req.body.selectedFile);
  const ambulance = new Ambulance({
    name: req.body.name,
    since: req.body.since,
    numberofambulance: req.body.numberofambulance,
    contact: req.body.contact,
    dutyhours: req.body.dutyhours,
    location: req.body.location,
    hospitals: req.body.hospitals,
    image: req.body.image,
    // selectedFile: req.body.selectedFile,
  });

  try {
    const savedAmbulance = await ambulance.save();
    res.json(savedAmbulance);
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECIFIC POST
router.get("/:ambulanceId", async (req, res) => {
  try {
    const ambulance = await Ambulance.findById(req.params.ambulanceId);
    res.json(ambulance);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE SPECIFIC POST
router.delete("/:ambulanceId", async (req, res) => {
  Ambulance.remove({_id:req.params.doctorsId})
  try {
    const removeAmbulance = await Ambulance.remove({ _id: req.params.ambulanceId });
    res.json(removeAmbulance);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE A DOCTORS DETAILS
router.patch("/:ambulanceId", upload.single("selectedFile"), async (req, res) => {
  try {
    const updateAmbulance = await Ambulance.updateOne(
      { _id: req.params.ambulanceId },
      {
        $set: {
            name: req.body.name,
            since: req.body.since,
            numberofambulance: req.body.numberofambulance,
            contact: req.body.contact,
            dutyhours: req.body.dutyhours,
            location: req.body.location,
            hospitals: req.body.hospitals,
            image: req.body.image,
          //   selectedFile: req.body.selectedFile,
        },
      }
    );
    res.json(updateAmbulance);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
