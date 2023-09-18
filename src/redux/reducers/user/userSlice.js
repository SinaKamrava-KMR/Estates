import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/authService";




const initialState = {
  openToast: false,
  message: "",
  severity: undefined,
  isLoading: false,
  user: undefined,
};


// export const authUser = createAsyncThunk<Promise<userType>>(
//   "user/auth",
//   async (email: string, password: string) => {
//     const request = new AuthService("http://localhost:8000");
//     return await request.check(email, password);
//   }
// );

export const authUser = createAsyncThunk(
  "user/auth",
  async (email, password ) => {
   
    const request = new AuthService("http://localhost:8000");
    return await request.check(email, password);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    closeToast: (state) => {
      state.openToast = false;
    },

    logout: (state) => {
      state.user = undefined;
      state.severity= undefined;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.isLoading = true
    });

    builder.addCase(authUser.fulfilled, (state, action) => {
      state.message = "Your are successfully login"
      state.severity = 'success'
      state.openToast=true
      state.user =action.payload
      state.isLoading = false
    });

    builder.addCase(authUser.rejected, (state, action) => {
      console.log(action);
      state.message = "User Not Found"
      state.severity = 'error'
      state.openToast=true
      state.user = undefined;
      state.isLoading = false
    });
  },
});

export const {logout, closeToast } = userSlice.actions;
export default userSlice.reducer;
