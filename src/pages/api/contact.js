// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createTransport } from "nodemailer";

export default async function handler(req, res) {
  try {
    if (req.body.name === "" || req.body.email == "" || req.body.message == "") {
      res.status(400);
      throw new Error("Invalid request");
    }
    const transporter = createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: req.body.email,
      to: "kristian.wobbes@gmail.com",
      subject: "Thanks for contacting me!",
      text: req.body.message,
    });
    res.status(200).send("Thank you!");
  } catch (error) {
    res.send(error);
    console.log(error);
  }
}
