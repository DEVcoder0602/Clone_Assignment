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
      body: JSON.stringify(body), // Only include body if it's provided
    });

    const responseData = await response.json();

    if (!responseData.success) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error) {
    return error;
  }
};

export default FetchApi;
