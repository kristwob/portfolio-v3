// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {
    if (req.body.name === "" || req.body.email == "" || req.body.message == "") {
      res.status(400);
      throw new Error("Invalid request");
    }
    res.status(200).send("Thank you!")
  } catch (error) {
    res.send(error);
    console.log(error);
  }
}
