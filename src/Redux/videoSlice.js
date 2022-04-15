import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: [
    {
      id: 1,
      image:
        "https://lesfondamentaux.reseau-canope.fr/fileadmin/user_upload/vignettes/single__960x540_/0082s.png",
      title: "Distinguer prisme et pyramide",
      source: "https://cdn.reseau-canope.fr/medias/lesfondamentaux/0082_hd.mp4",
    },
    {
      id: 2,
      image:
        "https://lesfondamentaux.reseau-canope.fr/fileadmin/user_upload/vignettes/list__480x270_/0383.png",
      title: "Que mange-t-on ?",
      source: "https://cdn.reseau-canope.fr/medias/lesfondamentaux/0383_hd.mp4",
    },
    {
      id: 3,
      image:
        "https://lesfondamentaux.reseau-canope.fr/fileadmin/user_upload/vignettes/single__960x540_/0194s.png",
      title: "Terre : la planète bleue",
      source: "https://cdn.reseau-canope.fr/medias/lesfondamentaux/0194_hd.mp4",
    },
    {
      id: 4,
      image:
        "https://lesfondamentaux.reseau-canope.fr/fileadmin/user_upload/vignettes/single__960x540_/0153s.jpg",
      title: "Le futur",
      source: "https://cdn.reseau-canope.fr/medias/lesfondamentaux/0153_hd.mp4",
    },
    {
      id: 5,
      image: "https://i.ytimg.com/vi/qGAy5KWNUn4/mqdefault.jpg",
      title: "decouvrir le son t et sa graphie",

      source: " ",
    },
    {
      id: 6,
      image: "https://i.ytimg.com/vi/9XxsWLrKJBY/mqdefault.jpg",
      title: "La révolution de la Terre autour du Soleil",
      source: "",
    },
  ],
  reducers: {
    addVideo: (state, action) => {
      const newVideo = {
        id: Math.random(),
        title: action.payload.title,
        image: action.payload.image,
        source: action.payload.source,
      };
      state.unshift(newVideo);
    },

    deleteVideo: (state, action) => {
      return state.filter((video) => video.id !== action.payload.id);
    },
    updateVideo(state, action) {
      const { id, title, image, source } = action.payload;
      const existingvideo = state.find((video) => video.id === id);
      if (existingvideo) {
        existingvideo.title = title;
        existingvideo.image = image;
        existingvideo.source = source;
      }
    },
    /* updateVideo: (state, action) => {
      console.log("state", state);
      console.log("action", action.payload);
      const index = state.findIndex((livre) => {
        return livre.id === action.payload.id;
      });
      state[index].title = action.payload.title;
      state[index].image = action.payload.image;
      state[index].description = action.payload.description;
      state[index].category = action.payload.category;
      state[index].pdf = action.payload.pdf;
    },*/
  },
});

export const { addVideo, deleteVideo, updateVideo } = videoSlice.actions;

export default videoSlice.reducer;
