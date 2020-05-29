const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {

    dest: path.resolve(__dirname, '..', '..', 'tmp', 'upload'),//para onde os arquivos vão após o upload
    //se nao tiver nada definito no destination ali em seguida, executa esse aqui, o dest
    storage:multer.diskStorage({
        destination:(req, file, cb)=>{
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb)=>{
            crypto.randomBytes(16, (err, hash)=>{
                if(err) cb(err);

                const filename = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, filename)
            })
        }
    }),
    limits: {
        fileSize: 2*1024*1024,
    },
    fileFilter: (req, file, cb)=>{ //req, infos e dados do arquivo, e callback
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/pjpeg',
            'image/gif',
            'image/JPG',
            'image/PNG'
        ];

        if (allowedMimes.includes(file.mimetype)){
            cb(null, true) //passa nulo pro erro e true pq deu sucessp
        }
        else{
            cb(new Error('Invalid file type.'));
        }
    },
}