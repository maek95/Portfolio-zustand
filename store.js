import { create } from "zustand";
import {devtools} from "zustand/middleware"

// the Redux project had a ThemeSlice.jsx with reducers etc, we place everything here instead with zustand.

export const useUserStore = create(devtools ( (set) => ({ // parantheses around brackets for automatic return-statement

  // initialstate:
  userPreferences : {
    theme: "light",
    fontSize: "text-base",
    reduceAnimations: false,
  },

  changeTheme: (theme) => set((state) => ({ // paranthesis around brackets, automatic return...
    ...state, // no immer..
    userPreferences: {
      ...state.userPreferences,
      theme: theme,
    }
  }),
    false,
    "changeTheme" // devtools stuff
  ),
  changeFontSize: (fontSize) => set((state) => ({
    ...state,
    userPreferences: {
      ...state.userPreferences,
      fontSize: fontSize,
    }
  }),
    false,
    "changeFontSize"
  ),
  changeReduceAnimations: (reduceAnimations) => set((state) => ({
    ...state,
    userPreferences: {
      ...state.userPreferences,
      reduceAnimations: reduceAnimations,
    }
  }),
    false,
    "reduceAnimations"
  )

})))