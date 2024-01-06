import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { auth } from "src/firebase";
import { useAuth } from "src/hooks/useAuth";
export interface AuthContextState {
  user: User | null;
  error: string;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
  error: "",
  isLoading: false,
  signIn: async () => {},
  signUp: async () => {},
  logOut: async () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    error,
    isLoading,
    logOut,
    signIn,
    signUp,
    user,
    setUser,
    setIsLoading,
  } = useAuth();
  const router = useRouter();
  const [initialLoader, setInitialLoader] = useState<boolean>(true);
  const value = useMemo(
    () => ({
      user,
      isLoading,
      logOut,
      signIn,
      signUp,
      error,
    }),
    [user, isLoading, error]
  );
  console.log(isLoading);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(true);
        router.push("/auth");
      }
      setIsLoading(false);
    });
    setInitialLoader(false);
  }, []);
  return (
    <AuthContext.Provider value={value}>
      {initialLoader ? "Loader..." : children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
