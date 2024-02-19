import globalInstance from "../api/globalInstance";
import { apiConfig } from "./config/apiConfig";
// import { useAppContext } from "./context";

async function GetHomeData() {
  // const { setFetchedData } = useAppContext();
  const response = await fetch(
    `${globalInstance.url}everything?q=in&apiKey=${apiConfig.apiKey}`
  );
  const jsonData = await response.json();
  return jsonData;
}

export default GetHomeData;
