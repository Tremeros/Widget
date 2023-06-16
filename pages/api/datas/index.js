import { datas } from './datas.js'

export default function handler(req, res) {
  res.status(200).json(datas)
}
