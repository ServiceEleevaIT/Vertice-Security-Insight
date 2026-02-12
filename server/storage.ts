import { db } from "./db";
import {
  landingLeads,
  type CreateLandingLeadRequest,
  type LandingLeadResponse,
} from "@shared/schema";

export interface IStorage {
  getLeads(): Promise<LandingLeadResponse[]>;
  createLead(input: CreateLandingLeadRequest): Promise<LandingLeadResponse>;
}

export class DatabaseStorage implements IStorage {
  async getLeads(): Promise<LandingLeadResponse[]> {
    return await db.select().from(landingLeads);
  }

  async createLead(
    input: CreateLandingLeadRequest,
  ): Promise<LandingLeadResponse> {
    const [created] = await db.insert(landingLeads).values(input).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
