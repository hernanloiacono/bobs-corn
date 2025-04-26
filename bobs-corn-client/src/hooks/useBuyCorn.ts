import { useState } from "react";
import { purchaseCorn } from "../services/api";

export const useBuyCorn = () => {
  const [message, setMessage] = useState<string | null>(null);

  const buyCorn = async () => {
    try {
      const res = await purchaseCorn();
      if (res.status === 200) {
        setMessage("🌽 Corn purchased successfully!");
      } else if (res.status === 429) {
        setMessage("⚠️ Too Many Requests: please wait a minute");
      } else {
        setMessage("❌ Something went wrong");
      }
    } catch (error) {
      setMessage("❌ Network error");
    }
  };

  return { buyCorn, message };
};