export interface IStorage {
  // No-op storage
  getLeads(): Promise<any[]>;
  createLead(input: any): Promise<any>;
}

export class MemStorage implements IStorage {
  async getLeads(): Promise<any[]> {
    return [];
  }

  async createLead(input: any): Promise<any> {
    console.log("Lead received (in-memory):", input);
    return { ...input, id: Math.random(), createdAt: new Date() };
  }
}

export const storage = new MemStorage();
