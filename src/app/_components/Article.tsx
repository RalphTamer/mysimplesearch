import { ArticlesDataType } from "../utils/utils";

type Props = {
  article: ArticlesDataType[0];
};
const Article = (props: Props) => {
  const { article } = props;
  return (
    <div
      className="py-4"
      style={{
        borderBottom: "1px solid #ccc",
      }}
    >
      <div className="font-bold text-[22px] text-[#635f5f]">
        {article.title}
      </div>
      <div className="font-bold text-[14px]">{article.date}</div>
      <div>{article.content}</div>
    </div>
  );
};

export default Article;
