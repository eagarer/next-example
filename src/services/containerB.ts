import { apiB } from "@/lib/api";

export const containerBService = {
  getAllComment: () => apiB.get("/comments"),
}