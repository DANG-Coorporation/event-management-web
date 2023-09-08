import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  checkReferraCode,
  getUser,
  getUsers,
  postUser,
} from "../../../api/users";
import { checkIsLogedIn, parseToken } from "../../../utils/checkUsers";
import { postReferralLinks } from "../../../api/referrals";

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

export const storeReferralLink = createAsyncThunk(
  "users/storeReferralLink",
  async ({ userid, referralCode }) => {
    const response = await postReferralLinks({ userid, referralCode });
    return response.data;
  }
);

export const fetchReferralCode = createAsyncThunk(
  "users/fetchReferralCode",
  async (referralCode) => {
    try {
      const response = await checkReferraCode(referralCode);
      console.log(response);
      return response;
    } catch (err) {
      return null;
    }
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
  isValidReferralCode: false,
  referralCode: "",
  referralCheckCount: 0,
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
    resetReferralCode(state) {
      state.isValidReferralCode = false;
      state.referralCode = "";
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
    builder.addCase(fetchReferralCode.fulfilled, (state, action) => {
      if (action.payload) {
        state.isValidReferralCode = true;
        state.referralCode = action.payload.referralCode;
      } else state.isValidReferralCode = false;
      state.referralCheckCount += 1;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
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
  resetReferralCode,
  setIsLogin,
} = userSlice.actions;

export default userSlice.reducer;
