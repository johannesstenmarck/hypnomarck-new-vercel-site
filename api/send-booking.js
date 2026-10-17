// Preview-only: deny submissions even when called directly.
export default function handler(req, res) {
 res.setHeader('Content-Type', 'application/json');
 return res.status(403).json({ok:false,error:'Förhandsversionen tar inte emot bokningsförfrågningar.'});
}
