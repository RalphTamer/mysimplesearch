import { ArticlesDataType } from "../utils/utils";
import Highlighter from "react-highlight-words";
type Props = {
  article: ArticlesDataType[0];
  searchWord: string;
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
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[props.searchWord]}
          autoEscape={true}
          textToHighlight={article.title}
        />
      </div>

      <div className="font-bold text-[14px]">{article.date}</div>
      {/* <div>{article.content}</div> */}
      <Highlighter
        searchWords={[props.searchWord]}
        autoEscape={true}
        textToHighlight={article.content}
      />
    </div>
  );
};

export default Article;
