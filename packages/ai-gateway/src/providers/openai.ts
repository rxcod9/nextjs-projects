import { AIProviderAdapter, AIGenerateOptions } from "../index";

export class OpenAIProvider implements AIProviderAdapter {
  constructor(private apiKey: string) {}

  async generateText(options: AIGenerateOptions): Promise<string> {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.apiKey
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          ...(options.systemPrompt ? [{ role: "system", content: options.systemPrompt }] : []),
          { role: "user", content: options.prompt }
        ],
        temperature: options.temperature ?? 0.7
      })
    });
    const data = await res.json();
    return data.choices[0].message.content;
  }

  async generateJSON<T>(options: AIGenerateOptions): Promise<T> {
    const rawText = await this.generateText({
      ...options,
      prompt: options.prompt + "\nIMPORTANT: Respond strictly with a raw valid JSON object."
    });
    const cleanJson = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson) as T;
  }

  async generateEmbeddings(text: string): Promise<number[]> {
    const res = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + this.apiKey
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: text
      })
    });
    const data = await res.json();
    return data.data[0].embedding;
  }
}
