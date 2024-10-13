import VideoModel from "../Model/Video.model.js";

export function fetchVideo(req, res) {
    VideoModel.find().then(data => {
        if(!data) {
            return res.status(404).json({message: "Videos are not present"});
        }
        res.status(200).send(data);
    }).catch(err => res.status(500).json({message: err.message}))
}

export function fetchOneVideo(req, res) {

    const _id = req.params.id

    VideoModel.findById(_id).then(data => {
        if(!data) {
            return res.status(404).json({message: "Video are not present"});
        }
        res.status(200).send(data);
    }).catch(err => res.status(500).json({message: err.message}))
}

export function AddVideo(req, res) {
    const {title, description, url, thumbnail, category, duration, uploadDate, views, likes, dislikes} = req.body;

    if(!title || !description || !url || !thumbnail || !category || !duration || !uploadDate || !views || !likes || !dislikes) {
        return res.status(400).json({message: "Fill All details"})
    }

    const newItem = new VideoModel({ 
        title: title, 
        description: description, 
        url: url, 
        thumbnail: thumbnail, 
        category: category, 
        duration: duration, 
        uploadDate: uploadDate, 
        views: views, 
        likes: likes, 
        dislikes: dislikes
    });

    newItem.save().then(data => {
        if(!data) {
            return res.status(404).json({message: "data not save"})
        }
        res.status(200).send(data);
    }).catch(err => res.status(500).json({message: err.message}))
}