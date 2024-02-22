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
            <div className="mt-10 w-5/6 m-auto ">
              <h1 className="uppercase font-medium text-xl">{item.title}. </h1>
              <span className="text-gray-400">Click for the full content</span>
              <img src={item.urlToImage} className="w-96 rounded-lg" alt="" />
              <span className="w-3/4 m-auto border-blue-500 border-solid border-t-2 block mt-6"></span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Articles;
