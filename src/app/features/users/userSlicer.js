import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, getUsers, postUser } from "../../../api/users";

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

const initialState = {
  users: [],
  data: {
    fullName: "",
    username: "",
    password: "",
    email: "",
  },
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
  },
});

export const { setFullName, setUsername, setPassword, setEmail } =
  userSlice.actions;

export default userSlice.reducer;
