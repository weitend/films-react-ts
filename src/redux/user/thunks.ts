import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAccount } from "../../api/account";

export const changeId = createAsyncThunk(
  "user/changeId",
  async (id: number) => {
    const accountData = await getAccount(id);
    console.log(accountData);

    return accountData.id;
  }
);
