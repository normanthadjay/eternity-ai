export async function generateWithPuLID(prompt: string) {
  const response = await fetch('https://api.flux.ai/v1/generate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.FLUX_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model_id: process.env.PULID_MODEL_ID,
      prompt
    })
  });
  return response.json();
} 