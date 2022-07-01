import type { NextApiRequest, NextApiResponse } from 'next';

interface IMessage {
  email: string;
  message: string;
  name: string;
}

type Data = {
  message: string;
  data?: IMessage;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      email.trim() === '' ||
      !email.includes('@') ||
      !message ||
      message.trim() === '' ||
      !name ||
      name.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    console.log(newMessage);

    res
      .status(201)
      .json({ message: 'Successfully stored message!', data: newMessage });
  }
}
