import "./Figure.css";
const Figure = ({ data }) => {
  return (
    <figure>
      <div className="imgContainer">
        <img src={data.url} alt={data.title} />
      </div>
      <div className="textContainer">
        <h3>{data.title}</h3>
        <p>{data.explanation}</p>
      </div>
    </figure>
  );
};
export default Figure;
/*
    <figure>
      <div class="window">
        <div class="title-bar">
          <button aria-label="Close" class="close"></button>
          <h1 class="title">{data.title}</h1>
          <button aria-label="Resize" class="resize"></button>
        </div>
        <div class="details-bar">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <img src={data.url} alt={data.title} />
        <div class="window-pane">{data.explanation}</div>
      </div>
    </figure>

 */
