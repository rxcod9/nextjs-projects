export interface AIGenerateOptions {
  prompt: string;
  systemPrompt?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface AIProviderAdapter {
  generateText(options: AIGenerateOptions): Promise<string>;
  generateJSON<T>(options: AIGenerateOptions): Promise<T>;
  generateEmbeddings(text: string): Promise<number[]>;
}

import { OllamaProvider } from './providers/ollama';
import { OpenAIProvider } from './providers/openai';

export function getAIProvider(): AIProviderAdapter {
  const provider = process.env.AI_PROVIDER || 'local';
  if (provider === 'openai') {
    return new OpenAIProvider(process.env.OPENAI_API_KEY || '');
  }
  return new OllamaProvider(process.env.OLLAMA_BASE_URL || 'http://localhost:11434');
}
