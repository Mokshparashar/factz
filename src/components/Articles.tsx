import { FC } from "react";
import { DataInterface } from "../../typings";

interface PropsInterface {
  data: DataInterface | undefined;
}
const Articles: FC<PropsInterface> = (props: PropsInterface) => {
  return (
    <div>
      {props?.data?.articles?.map((item) => {
        return (
          <a href={item.url} key={item.title}>
            <div className="mt-10">
              <h1 className="uppercase font-medium text-3xl">{item.title} </h1>
              <span className="text-green-600">Click for the full content</span>
              <img src={item.urlToImage} alt="" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Articles;
