export async function retry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 5,
  delay: number = 1000,
  backoff: number = 2,
): Promise<T> {
  let lastError: Error;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, error.message);
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= backoff;
    }
  }

  throw lastError;
}
