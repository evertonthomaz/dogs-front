import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const heightPage = document.body.offsetHeight - window.innerHeight;

        if (scroll > heightPage * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          user={user}
          page={page}
          key={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;