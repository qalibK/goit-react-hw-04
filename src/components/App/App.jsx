import { useEffect, useState } from "react";
import { fetchPhotos } from "../../photos-api";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";
import css from "./App.module.css";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    async function getPhotos() {
      try {
        setLoading(true);
        const data = await fetchPhotos(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getPhotos();
  }, [page, query]);

  const handleImageClick = (item) => {
    setActiveItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <SearchForm onSearch={handleSearch} />
      </div>
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery items={photos} onImageClick={handleImageClick} />
      )}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onCloseModal={handleCloseModal}
          item={activeItem}
        />
      )}
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onHandleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}
