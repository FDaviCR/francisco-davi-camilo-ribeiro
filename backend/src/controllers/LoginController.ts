import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const login = async (req: Request, res: Response) => {
  if(req.body.username && req.body.password) {
    let { username, password } = req.body;
      
    if(username == 'desafiosharenergy' && password == 'sh@r3n3rgy') {
      res.sendStatus(200)
    }else{
      res.json({ error: 'Usuário ou senha incorretos.' });
    }
  }else {
    res.json({ error: 'Usuário e/ou senha não foram enviados.' });
  }
}
