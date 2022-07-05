import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';


interface User {
  fullname: string,
}
export const UserContext = React.createContext({ user: {} as User });


interface Props {
  children: React.ReactNode,
}

export function UserProvider({ children }: Props) {
  const [user, setUserState] = useState({} as User);

  const setUser = useCallback(() => setUserState({ fullname: 'Фамилия И.О.' }), [setUserState]);

  useEffect(() => {
    setTimeout(setUser, 0);
  }, [setUser]);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
