import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Redux slice for global UI state (sidebar and dark mode)
export interface InitialStateTypes {
  // Whether the sidebar is collapsed
  isSidebarCollapsed: boolean;
  // Whether dark mode is enabled
  isDarkMode: boolean;
}

// Initial state for the global slice
const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

// Create a Redux slice for global UI state
export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // Set sidebar collapsed state
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    // Set dark mode state
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
