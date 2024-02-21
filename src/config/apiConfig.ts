interface apiConfigInterface {
  apiKey: string;
  proxyEndPoint: string;
}
export const apiConfig: apiConfigInterface = {
  apiKey: import.meta.env.VITE_PUBLIC_API_KEY,
  proxyEndPoint: import.meta.env.VITE_PUBLIC_API_ENDPOINT,
};
