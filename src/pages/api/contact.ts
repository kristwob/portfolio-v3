import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body
    try {
      if (name === '' || email == '' || message == '') {
        res.status(400)
        throw new Error('Invalid request')
      }
      const transporter = createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        auth: {
          user: process.env.NEXT_PUBLIC_SMTP_USER,
          pass: process.env.NEXT_PUBLIC_SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `${name} - ${email}`,
        to: 'kristian.wobbes@gmail.com',
        subject: 'Thanks for contacting me!',
        text: message,
      })
      res.status(200).send('Message sent')
    } catch (error) {
      res.status(500).send(error)
      console.log(error)
    }
  } else {
    res.status(500).send('Server error')
  }
}
