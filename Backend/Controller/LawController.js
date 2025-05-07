import Law from "../Model/LawSchema.js";
import nodemailer from "nodemailer";

export const add = async (req, res) => {
    const formdata = req.body;
    const saveData = new Law(formdata);
    try {
        await saveData.save();
        res.status(200).json({ message: saveData });
    } catch (err) {
        res.status(500).json({ message: "Error saving data" });
    }
};

export const view=async(req, res)=>{
    try{
        const s=await Law.find();
        if(s){
            res.status(200).json({message:"Success",data:s})
        }
        res.status(400).json({message:"No data found"})
    }
    catch(err){
        res.status(500).json({message:"Error fetching data"})
    }
}

const sentEmails = new Set();

export const mailsenter = async (req, res) => {
  const { toEmail, subject, message } = req.body;
  if (sentEmails.has(toEmail)) {
    return res.status(400).json({ message: "Email already sent" });
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'manojprabhus.22csd@kongu.edu',
        pass: 'sqhk pqmh ltma nytu'
      }
    });
    const mailOptions = {
      from: '"Law System" <manojprabhus.22csd@kongu.edu>',
      to: toEmail,
      subject,
      text: message
    };
    await transporter.sendMail(mailOptions);
    sentEmails.add(toEmail); // Mark as sent
    console.log("Email sent successfully");
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Email send failed" });
  }
};
