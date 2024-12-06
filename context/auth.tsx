import { users } from '@/db/users';
import { useFeedback } from '@/hooks/useFeedback';
import { useStorageState } from '@/hooks/useStorage';
import { LogInDataType, UserType } from '@/types/auth';
import { useContext, createContext, type PropsWithChildren, useState } from 'react';

const AuthContext = createContext<{
  logIn: (user: LogInDataType) => void;
  logOut: () => void;
  session?: string | null;
  isLoading: boolean;
  user: Omit<UserType, 'password'> | null;
  setUser: (user: UserType | null) => void;
}>({
  logIn: () => null,
  logOut: () => null,
  session: null,
  isLoading: false,
  user: null,
  setUser: () => null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const [user, setUser] = useState<Omit<UserType, 'password'> | null>(null)
  const { setFeedback } = useFeedback();

  function handleLogIn(data: LogInDataType) {
    const matchedUser = users.find(
      (user) => user.password === data.password && user.username.toLowerCase() === data.username.toLowerCase()
    );  

    if (matchedUser) {
      setSession('user_session');
      setUser({id: matchedUser.id, username: matchedUser.username, avatar: matchedUser.avatar})
    } else {
      setFeedback({message: 'Incorrect password or username', type: 'error'});
      setUser(null)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        logIn: handleLogIn,
        logOut: () => {
          setSession(null);
          setUser(null)
        },
        session,
        isLoading,
        user,
        setUser
      }}>
      {children}
    </AuthContext.Provider>
  );
}
