import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";

export type LoginContextProps = {
  firstPlayerName: string;
  secondPlayerName: string;
  setFirstPlayerName: (userName: string) => void;
  setSecondPlayerName: (userName: string) => void;
};

export const LoginContext = createContext<LoginContextProps>({
  firstPlayerName: "",
  secondPlayerName: "",
  setFirstPlayerName: () => {},
  setSecondPlayerName: () => {},
});

export const useLoginContext = (): LoginContextProps =>
  useContext(LoginContext);

export const LoginContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [firstPlayerName, setFirstPlayerName] = useState("");
  const [secondPlayerName, setSecondPlayerName] = useState("");

  return (
    <LoginContext.Provider
      value={{
        firstPlayerName,
        secondPlayerName,
        setFirstPlayerName,
        setSecondPlayerName,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
