const jwt = require('jsonwebtoken')

const auth = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(token==null) res.status(401)
    jwt.verify(token,process.env.WEB_TOKEN,(error,user)=>{
        if(error) throw error
        req.user = user.worker_id
    })
    next()
}

module.exports = auth