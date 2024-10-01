import { Database } from "@changes-page/supabase/types";
import { Stripe } from "stripe";

export type IUser = Database["public"]["Tables"]["users"]["Row"] & {
  stripe_subscription: Stripe.Subscription | null;
  has_active_subscription: boolean;
};
