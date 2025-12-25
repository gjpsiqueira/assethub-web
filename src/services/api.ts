const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

type GetOptions = Omit<RequestInit, "method">;

export async function get<T = unknown>(path: string, options?: GetOptions): Promise<T> {
  const url = `${API_URL}${path}`;

  try {
    const response = await fetch(url, {
      ...options,
      method: "GET",
      headers: {
        Accept: "application/json",
        ...(options?.headers ?? {})
      }
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error("API get() error", error);
    throw error;
  }
}
