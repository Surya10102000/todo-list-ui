import jwt from 'jsonwebtoken'
const requireAuth = async (req, res, next ) =>{
    const { authorization } = req.headers;
    if(!authorization){
        return res.status(401).json({message : "Unautorized - No token provided"})
    }

    const token = authorization.split(' ')[1]+""
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        req.token = token 
        next();
    }catch (error){
        console.log("Error in the requireAuth middleware")
        return res.status(500).json({ message : error.message})
    }
}

export default requireAuth;