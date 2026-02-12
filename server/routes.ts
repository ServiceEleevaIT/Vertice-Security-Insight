import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existing = await storage.getLeads();
  if (existing.length > 0) return;

  await storage.createLead({
    name: "Mariana Souza",
    email: "mariana.souza@exemplo.com",
    company: "Grupo Horizonte",
    role: "Gerente de Operações de TI",
    phone: "+55 11 99999-0000",
    message:
      "Gostaria de entender como o VERTICE unifica dados de Zabbix e Dynatrace e como funciona o enriquecimento via CMDB.",
    source: "seed",
  });

  await storage.createLead({
    name: "Rafael Lima",
    email: "rafael.lima@exemplo.com",
    company: "Fintech Aurora",
    role: "SRE",
    phone: "+55 21 98888-1111",
    message:
      "Temos incidentes recorrentes e queremos reduzir MTTR com correlação e insights preditivos.",
    source: "seed",
  });
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const created = await storage.createLead(input);
      return res.status(201).json(created);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0]?.message ?? "Invalid request",
          field: err.errors[0]?.path?.join("."),
        });
      }

      return res.status(500).json({ message: "Internal error" });
    }
  });

  await seedDatabase();

  return httpServer;
}
