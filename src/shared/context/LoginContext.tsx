import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

export type LoginContextProps = {
  userName: string;
  setUserName: (userName: string) => void;
};

export const LoginContext = createContext<LoginContextProps>({
  userName: "",
  setUserName: () => {},
});

export const useLoginContext = (): LoginContextProps =>
  useContext(LoginContext);

export const LoginContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState("");

  return (
    <LoginContext.Provider value={{ userName, setUserName }}>
      {children}
    </LoginContext.Provider>
  );
};
