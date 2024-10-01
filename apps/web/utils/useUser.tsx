import { Database } from "@changes-page/supabase/types";
import { Session, SupabaseClient, User } from "@supabase/auth-helpers-nextjs";
import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { notifyInfo } from "../components/core/toast.component";
import { ROUTES } from "../data/routes.data";
import { IUser } from "../data/user.interface";

const UserContext = createContext<{
  loading: boolean;
  session: Session | null;
  user: User | null;
  fetchUser: () => Promise<IUser>;
  signOut: () => Promise<{ error: Error | null }>;
  supabase: SupabaseClient<Database>;
}>({
  loading: true,
  session: null,
  user: null,
  fetchUser: () => null,
  signOut: () => null,
  supabase: null,
});

export const UserContextProvider = (props: any) => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const user = useUser();

  const router = useRouter();

  const value = {
    session,
    user,

    signOut: async () => {
      await router.replace(ROUTES.HOME);
      await supabase.auth.signOut();

      notifyInfo("Logout completed");
    },

    supabase,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUserData = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
