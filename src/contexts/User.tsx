import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';


type User = {
  fullname: string,
} | null;

const initialUser: User = null;

interface UserContextType {
  user: User,
  setUser?: (user: User) => void,
}
export const UserContext = React.createContext<UserContextType>({ user: initialUser });


interface Props {
  children: React.ReactNode,
}

export function UserProvider({ children }: Props) {
  const [user, setUserState] = useState<User>(initialUser);

  const setUser = useCallback((newUser: User) => setUserState(newUser), [setUserState]);

  useEffect(() => {
    setTimeout(() => setUser({ fullname: 'Фамилия И.О.' }), 0);
  }, [setUser]);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
