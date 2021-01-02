import * as functions from 'firebase-functions'
import {getOmikuji} from './omikuji'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const omikuji = functions.https.onRequest((request, response) => {
  const params = request.query
  const ren = params.ren ? Number(params.ren) : 1
  if (ren !== 1 && ren !== 10) {
    response.status(400)
    response.json({error: "bad request"})
    return
  }

  const ret: {result: Omikuji[]} = {result: []}
  for (let i = 0; i < ren; i++)
  {
    ret.result.push(getOmikuji())
  }
  response.json(ret)
});
