import z from "zod";

export const earlySchema = z.object({
  email: z.string().email(),
});
