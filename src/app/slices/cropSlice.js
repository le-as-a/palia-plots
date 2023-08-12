import { createSlice } from "@reduxjs/toolkit";

export const cropSlice = createSlice({
    name: 'crop',
    initialState: {
        "Carrot": {
            ability: "weed prevention",
            image: "🥕"
          },
          "Tomato": {
            ability: "water retain",
            image: "🍅"
          },
          "Wheat": {
            ability: "harvest boost",
            image: "🌾"
          },
          "Cotton": {
            ability: "quality boost",
            image: "☁️"
          }
    }
});