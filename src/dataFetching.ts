import globalInstance from "../api/globalInstance";
import { apiConfig } from "./config/apiConfig";
import { useAppContext } from "./context";

async function GetHomeData() {
  const { setFetchedData } = useAppContext();
  try {
    const response = await fetch(
      `${globalInstance.url}everything?q=in&apiKey=${apiConfig.apiKey}`
    );
    const jsonData = await response.json();

    setFetchedData(jsonData);
  } catch (error) {
    console.log(error);
  }
}

export default GetHomeData;
