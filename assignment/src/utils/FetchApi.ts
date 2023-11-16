import { API_URL } from "../constant/endpoints";

interface FetchApiProps {
  url: string;
  method?: string;
  body?: object;
}

const FetchApi = async ({ url, method, body }: FetchApiProps) => {
  const api = API_URL + url;
  try {
    const response = await fetch(api, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined, // Only include body if it's provided
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default FetchApi;
