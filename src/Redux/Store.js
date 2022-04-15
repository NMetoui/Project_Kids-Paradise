import { configureStore } from "@reduxjs/toolkit";
import livreSlice from "./livreSlice";
import videoSlice from "./videoSlice";
import authSlice from "./authSlice";
import editbookSlice from "./editbookSlice";
export default configureStore({
  reducer: {
    /*comptes: compteSlice,*/
    livres: livreSlice,
    videos: videoSlice,
    auth: authSlice,
    editbook: editbookSlice,
  },
});
