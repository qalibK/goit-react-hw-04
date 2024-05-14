import css from "./ImageCard.module.css";

export default function ImageCard({ item, onClick }) {
  return (
    <div>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => onClick(item)}
      />
    </div>
  );
}
