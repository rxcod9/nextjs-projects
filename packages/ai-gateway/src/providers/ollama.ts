import { AIProviderAdapter, AIGenerateOptions } from "../index";

export class OllamaProvider implements AIProviderAdapter {
  constructor(private baseUrl: string) {}

  async generateText(options: AIGenerateOptions): Promise<string> {
    const res = await fetch(this.baseUrl + "/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OLLAMA_MODEL || "llama3:8b",
        prompt: (options.systemPrompt ? options.systemPrompt + "\n" : "") + options.prompt,
        stream: false,
        options: { temperature: options.temperature ?? 0.7 }
      }),
    });
    const data = await res.json();
    return data.response;
  }

  async generateJSON<T>(options: AIGenerateOptions): Promise<T> {
    const rawText = await this.generateText({
      ...options,
      prompt: options.prompt + "\nIMPORTANT: Respond strictly with a raw valid JSON object without markdown formatting."
    });
    const cleanJson = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson) as T;
  }

  async generateEmbeddings(text: string): Promise<number[]> {
    const res = await fetch(this.baseUrl + "/api/embeddings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "nomic-embed-text",
        prompt: text,
      }),
    });
    const data = await res.json();
    return data.embedding;
  }
}
