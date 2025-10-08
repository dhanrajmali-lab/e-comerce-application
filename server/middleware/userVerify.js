const userVerify = (val) => {
  return (req, res, next) => {
    try {
      if (val != res.user.data.roles) {
       
        next();
      } else {

        res.status(400).json("access denied");
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  };
};


export default userVerify