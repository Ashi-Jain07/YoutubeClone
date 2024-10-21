import { addChannel, addVideo, deleteChannel, deleteVideo, editVideo, viewChannel } from "../Controller/channel.controller.js";
import {verifyUser} from "../middleware/verifyUser.js"

export function channelRoutes(app) {
    app.post("/addchannel", addChannel);
    app.get("/channels", viewChannel);
    app.delete("/deletechannel/:id", deleteChannel);
    app.patch("/addVideo/:id", verifyUser, addVideo);
    app.patch("/editvideo/:id", verifyUser, editVideo);
    app.delete("/deletevideo/:id", verifyUser, deleteVideo);
}