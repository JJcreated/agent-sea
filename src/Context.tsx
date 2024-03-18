import { createContext, Dispatch, SetStateAction } from "react";

type MenuActiveContextType = {
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
};

export const MenuActive = createContext<MenuActiveContextType>({
  menuActive: false,
  setMenuActive: () => {},
});