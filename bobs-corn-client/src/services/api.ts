const API_URL = import.meta.env.VITE_BACKEND_URL;

export async function purchaseCorn() {
  const res = await fetch(`${API_URL}/purchase-corn`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });
  return res;
}