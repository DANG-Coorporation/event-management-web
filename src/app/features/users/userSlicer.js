import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, getUsers, postUser } from "../../../api/users";
import { checkIsLogedIn, parseToken } from "../../../utils/checkUsers";

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  const response = await postUser(user);
  return response.data;
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getUsers();
  return response.data;
});

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id) => {
    const response = await getUser(id);
    return response.data;
  }
);

export const checkLogin = createAsyncThunk("users/checkLogin", async () => {
  if (checkIsLogedIn()) {
    const userData = parseToken();
    if (userData) return userData;
    else return null;
  } else return null;
});

const initialState = {
  users: [],
  data: {
    fullName: "",
    username: "",
    password: "",
    email: "",
  },
  credential: {
    username: "",
    password: "",
  },
  login: {
    fullName: "",
    username: "",
    email: "",
  },
  isLogin: false,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFullName(state, action) {
      state.data.fullName = action.payload;
    },
    setUsername(state, action) {
      state.data.username = action.payload;
    },
    setPassword(state, action) {
      state.data.password = action.payload;
    },
    setEmail(state, action) {
      state.data.email = action.payload;
    },
    setLoginEmail(state, action) {
      state.credential.username = action.payload;
    },
    setLoginPassword(state, action) {
      state.credential.password = action.payload;
    },
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(fetchUsers.pending, (state, _) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = state.users.concat(action.payload);
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(checkLogin.fulfilled, (state, action) => {
      if (action.payload) {
        state.login = action.payload;
        state.isLogin = true;
      } else state.isLogin = false;
    });
  },
});

export const {
  setFullName,
  setUsername,
  setPassword,
  setEmail,
  setLoginEmail,
  setLoginPassword,
  setIsLogin,
} = userSlice.actions;

export default userSlice.reducer;
