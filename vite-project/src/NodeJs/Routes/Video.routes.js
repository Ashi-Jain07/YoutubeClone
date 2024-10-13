import { AddVideo, fetchOneVideo, fetchVideo } from "../Controller/Video.controller.js";

export function VideoRoutes(app) {
    app.get("/video", fetchVideo);
    app.get("/video/:id", fetchOneVideo);
    app.post("/video", AddVideo);
}