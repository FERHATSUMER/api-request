import ImageItem from "./ImagesItem";

function ImageList({ imagesPlaceholder }) {
  return (
    <div className="imageList">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem   key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
