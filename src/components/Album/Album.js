import "./Album.scss";

const Album = ( { album, featured, handleAlbumLike } ) => {
    return (
        <article className={`album ${featured ? "album--featured" : ""}`}>
            <h3>{album.title}</h3>
            <address>{album.artist}</address>
            <p>{album.description}</p>
            <span onClick={() => handleAlbumLike(album.id)}>
                Like{album.likes > 1 ? "s" : ""}: {album.likes} ❤️
            </span>
        </article>
    );
}

export default Album;