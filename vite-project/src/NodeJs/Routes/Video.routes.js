import { AddVideo, deleteComment, editComment, fetchVideo, UpdateLikesDislikeComment } from "../Controller/Video.controller.js";
import { verifyUser } from "../middleware/verifyUser.js";

export function VideoRoutes(app) {
    app.get("/video", fetchVideo);
    app.post("/video", AddVideo);
    app.patch("/video/:id", verifyUser, UpdateLikesDislikeComment);
    app.patch("/editcomment/:id", verifyUser, editComment)
    app.delete("/deletecomment/:id", deleteComment)
}