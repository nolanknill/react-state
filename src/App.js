import Album from "./components/Album/Album";
import Counter from "./components/Counter/Counter";
import "./App.scss";
import { useState } from "react";

function App() {
  document.title = "State is Super Cool";

  const [featuredAlbumId, setFeaturedAlbumId] = useState(null);
  const [albums, setAlbums] = useState([
    {
      id: 1,
      title: "Radiodread",
      description: "It's a reggae version of OK Computer by Radiohead",
      artist: "Easy Star All-Stars",
      likes: 1,
    },
    {
      id: 2,
      title: "Ghost Stories",
      description: "Ghost Stories is the sixth studio album by British rock band Coldplay.",
      artist: "Coldplay",
      likes: 1
    }
  ]);

  /* Original handleAlbumLike when album is an object
  const handleAlbumLike = () => {
    // copy the album object using spread
    const newAlbum = { ...album };

    // increase the copied album likes by 1
    newAlbum.likes++;

    // set state
    setAlbum(newAlbum);

    // refactor to one statement
    setAlbum({
      ...album,
      likes: album.likes + 1
    });
  }
  */

  const handleAlbumLike = (albumId) => {
    // Creates a copy of the albums with likes updated for clicked album 
    const newAlbums = albums.map((album) => {
      if (album.id === albumId) {
        return {
          ...album,
          likes: album.likes + 1
        }
      }

      return album;
    })

    setAlbums(newAlbums);
    setFeaturedAlbumId(albumId);
  }

  return (
    <>
      <Counter />
      
      <section className="albums">
        <h2 className="albums__title">June Bug Fixers' Albums</h2>
        {albums.map((album) => {
          return (
            <Album 
              key={album.id}
              featured={album.id === featuredAlbumId}
              album={album} 
              handleAlbumLike={handleAlbumLike} 
              />
          );
        })}
      </section>

      {/* <Counter /> */}
    </>
  )
}

export default App;