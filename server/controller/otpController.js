import { otp } from "../model/index.js";


const otpVerify =async (req,res) => {
  
  try {

    const {otpd}= req.body;
    const userid=res.user.data.id;

    const data = await otp.findOne({where:{userId:userid},order:[['expiresAt','DESC']]})

    // console.log("h",data)
   

    if(otpd == data.otp_value)
    {

        const curdate = new Date(Date.now());

            if(curdate < data.expiresAt)
            {
                res.status(200).json({msg:"otp is verified",roles:res.user.data.roles})
            }
            else{
             
                 res.status(500).json({msg:"your otp is expired"});
                
            }
    }
    else{
    res.status(500).json({ error: "please enter valid otp"});
    }
  } catch (error) {
    res.status(500).json({ error: "something wrong", msg: error });

    
  }
}


export default otpVerify;
