import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type CreateLeadInput } from "@shared/routes";

function parseWithLogging<T>(
  schema: { safeParse: (data: unknown) => { success: true; data: T } | { success: false; error: any } },
  data: unknown,
  label: string,
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error?.format?.() ?? result.error);
    throw result.error;
  }
  return result.data;
}

export function useCreateLead() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateLeadInput) => {
      const validated = parseWithLogging(api.leads.create.input, input, "leads.create.input");

      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const err = parseWithLogging(
            api.leads.create.responses[400],
            await res.json().catch(() => ({})),
            "leads.create.responses[400]",
          );
          throw new Error(err.message);
        }
        const text = await res.text().catch(() => "");
        throw new Error(text || "Falha ao enviar. Tente novamente.");
      }

      const data = await res.json();
      return parseWithLogging(api.leads.create.responses[201], data, "leads.create.responses[201]");
    },
    onSuccess: async () => {
      // No list endpoint yet; keep cache consistent for future expansion.
      await queryClient.invalidateQueries({ queryKey: [api.leads.create.path] });
    },
  });
}
