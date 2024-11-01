export async function processWithComfyUI(input: any) {
  const response = await fetch(`${process.env.COMFY_UI_URL}/api/queue`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input)
  });
  return response.json();
} 