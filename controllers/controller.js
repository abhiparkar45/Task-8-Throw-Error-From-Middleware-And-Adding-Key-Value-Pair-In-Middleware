const controller = (req,res,next) => {
    res.status(200).json({
        success:true,
        data:{
            key :req.key
        }
    })
}
module.exports = controller;