import multer from "multer";

console.log("helllo")
const storage = multer.diskStorage({
  destination: (req, file, call) => {
    call(null, "./uploads/");
  },
  filename: (req, file, call) => {
    call(null, Date.now() + "-" + file.originalname); 
  },
});

const upload = multer({ storage: storage });

const multfile = upload.single("image");



export default multfile;
