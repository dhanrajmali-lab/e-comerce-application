import {user} from "../model/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {otp} from "../model/index.js";
import otpGenerator from 'otp-generator'
dotenv.config();

const userCreation = async (req, res) => {
  try {
    const { name, email, password, roles, address } = req.body;

    const hashpass = bcrypt.hashSync(password, 5);

    await user.create({ name, email, password: hashpass, roles, address });

    res.status(200).json({ msg: "user is created" });
  } catch (error) {
    res.status(500).json({ errormessage: error });
  }
};



const userEdit = async (req, res) => {
  try {
    const {name,email,password, roles, address,status} = req.body;

    const id = req.params.id;

    const hashpass = bcrypt.hashSync(password, 5);

   
    await user.update({ name, email, password: hashpass, roles, address , status:status},{where:{id:id}});
    console.log("hel")

    res.status(200).json({ msg: "user is created" });
  } catch (error) {
    res.status(500).json({ errormessage: error });
  }
};


const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await user.findOne({ where: { email: email } });

    if (data == null) {
      res.status(404).json({ msg: "user is not found" });
    } else if (bcrypt.compareSync(password, data.password) == false) {
      res.status(201).json("password is incorrected");
    } else {

      const otptetx=  otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    
      
      const token = jwt.sign({ data }, process.env.SECRETKEY, {
        expiresIn: "1d",
      });

       const exptime = new Date(Date.now() + 10 * 60000);

        console.log(exptime)

       await otp.create({	otp_value:otptetx,expiresAt:exptime,userId:data.id})


      res.status(200).json({ msg: "user is loging please enter otp",jwt:token });
    }
  } catch (error) {
    res.status(500).json({ error: "something wrong", msg: error });
  }
};



const removeuser =async (req,res)=>{
  try {
 
    const id = req.params.id;

    await user.destroy({where:{id:id}})

    res.status(200).json({msg:"user is delete"})
  } catch (error) {
    res.status(500).json({ error: "something wrong", msg: error });
  }
}



const getuserById =async (req,res)=>{
  try {
 
    console.log("hello")
    const id = req.params.id;

    const data=await user.findByPk(id)

    res.status(200).json({data})
  } catch (error) {
    res.status(500).json({ error: "something wrong", msg: error });
  }
}

const forgotPassword = async (req, res) => {
  try {
     const { email,password } = req.body;

     const hashpass = bcrypt.hashSync(password, 5);
     const d= await user.update({password:hashpass},{ where: { email: email } });

      res.status(200).json({msg:"password successfully reset"})
 
  } catch (error) {
    res.status(500).json({ error: "something wrong", msg: error });
  }
};

const changePassword = async (req, res) => {
  try {
    const {password ,newPassword} = req.body;

    const email = res.user.data.email;
    if(bcrypt.compareSync(password, res.user.data.password) == false)
    {
       res.status(400).json({msg:"password is not matched"}) 
    }
    else{
      

      const hashpass = bcrypt.hashSync(newPassword, 5);
      
      const d= await user.update({password:hashpass},{ where: { email: email } });
      res.status(200).json({msg:"password successfully updated"})

    }
 
  } catch (error) {
    res.status(500).json({ error: "something wrong", msg: error });
  }
};



const getAllUser =async (req,res) => {
  
  try {
    
      const data = await user.findAll({where:{roles:'user'}})

    res.status(200).json({data});

  } catch (error) {
    
    res.status(500).json({ error: "something wrong", msg: error });

  }
}



const getAllVendor =async (req,res) => {
  
  try {
    
      const data = await user.findAll({where:{roles:'vendor'}})

    res.status(200).json({data});

  } catch (error) {
    
    res.status(500).json({ error: "something wrong", msg: error });

  }
}

export {userCreation,userLogin,forgotPassword,changePassword,getAllUser,getAllVendor,removeuser,getuserById,userEdit}