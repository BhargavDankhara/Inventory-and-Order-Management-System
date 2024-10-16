import Stripe from "stripe";
import { ENV_VARS } from "./envVars.js";

export const stripe = new Stripe(ENV_VARS.STRIPE_SECRET_KEY);
