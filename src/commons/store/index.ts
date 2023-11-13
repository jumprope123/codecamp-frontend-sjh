import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const testState: any = atom({
  key: "testState",
  default: JSON.parse("{}"),
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});
