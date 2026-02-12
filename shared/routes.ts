import { z } from "zod";
import {
  insertLandingLeadSchema,
  type LandingLead,
  type CreateLandingLeadRequest,
} from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  leads: {
    create: {
      method: "POST" as const,
      path: "/api/leads" as const,
      input: insertLandingLeadSchema.extend({
        email: z.string().email(),
        name: z.string().min(2),
        company: z.string().min(2),
      }),
      responses: {
        201: z.custom<LandingLead>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(
  path: string,
  params?: Record<string, string | number>
): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type CreateLeadInput = z.infer<typeof api.leads.create.input>;
export type CreateLeadResponse = z.infer<typeof api.leads.create.responses[201]>;
export type ValidationError = z.infer<typeof errorSchemas.validation>;
export type NotFoundError = z.infer<typeof errorSchemas.notFound>;
export type InternalError = z.infer<typeof errorSchemas.internal>;

export type { LandingLead, CreateLandingLeadRequest };
