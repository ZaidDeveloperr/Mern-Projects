import multer from "multer"

const storage = multer.diskStorage({ // Specifies how and where files should be stored.
    filename: function(req,file,callback){
        callback(null, file.originalname)
    }
})

const upload = multer({storage}) // Creates the upload middleware with the defined storage configuration. This middleware handles file uploads in routes.

export default upload