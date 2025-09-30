import { apiA } from "@/lib/api";

export const containerAService = {
  getAllComment: () => apiA.get("/getAllComment"),
}