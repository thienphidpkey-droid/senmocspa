import { GoogleGenAI } from "@google/genai";

export const generateProductSeo = async (productName: string, category: string): Promise<{ title: string; description: string; tags: string[]; schema: any }> => {
  try {
    // Initialize inside the function and safely access process.env
    // This prevents "ReferenceError: process is not defined" in some browser environments
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    
    if (!apiKey) {
        console.warn("API Key not found. Skipping AI generation.");
        throw new Error("Missing API Key");
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    const prompt = `
      Act as a Technical SEO Expert for "NeonGlide", a premier Roller Skating Shop.
      Generate SEO metadata and JSON-LD Schema for a product.
      
      Product: "${productName}"
      Category: "${category}"
      Brand: "NeonGlide"
      
      Requirements:
      1. Title: Compelling, keyword-rich, max 60 chars.
      2. Description: Action-oriented, highlights USP, max 160 chars.
      3. Tags: 5-8 relevant semantic keywords.
      4. Schema: Valid JSON-LD Schema.org 'Product' object (include name, brand, category).
      
      Output strictly in JSON format. Keys: "title", "description", "tags", "schema".
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini SEO Generation Error:", error);
    // Fallback content
    return {
      title: `${productName} - Chính Hãng | NeonGlide`,
      description: `Mua ${productName} chất lượng cao tại NeonGlide. Chuyên giày patin ${category} uy tín, giá tốt.`,
      tags: ["patin", category, productName, "neonglide", "giày trượt"],
      schema: {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": productName,
        "brand": {
          "@type": "Brand",
          "name": "NeonGlide"
        }
      }
    };
  }
};