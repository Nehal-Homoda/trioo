import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  theme: string
}

const initialState = { theme:'light' } 

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      const mode= document.documentElement.getAttribute('data-mode')
      
    },
    
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer