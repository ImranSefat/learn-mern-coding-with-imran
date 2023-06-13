import axios from "axios";

export async function fetchData(url: string): Promise<any> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    // Handle any error here (e.g., logging, error notification, etc.)
    throw new Error("Failed to fetch data from the API.");
  }
}
