import { Request, Response } from 'express';
import axios from 'axios';

export const listUsers = (req: Request, res: Response) => {
  if(req.params.page) {
    let { page } = req.params;
    const users = axios.get(`https://randomuser.me/api/?page=${page}&results=10`)

    res.send(users)
  }
}