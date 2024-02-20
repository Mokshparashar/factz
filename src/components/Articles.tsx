import { FC } from "react";
import { useAppContext } from "../context";

interface dataInterface {
  articles: object[];
  status: string;
  totalResults: number;
}
interface propsInterface {
  data: dataInterface | undefined;
}
const Articles = (props: propsInterface) => {
  console.log(props.data);

  return <div>Articles</div>;
};

export default Articles;
