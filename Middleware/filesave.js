const uploadFile = (req, res, next) => {
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = file.name;
  console.log(filename);
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      console.log(err.message, "message");
      res.status(500).send({ message: "File upload failed", code: 200 });
    } else {
      next();
    }
  });
};
module.exports = uploadFile;
