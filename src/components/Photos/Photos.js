import React from "react";
import { useEffect, useState } from "react";
import "./Photos.css";
import TagButton from "./TagButton";

const Photos = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  const images = [
    { id: "1", imageName: "img1.jpg", tag: "eve" },
    { id: "2", imageName: "img2.jpg", tag: "eve" },
    { id: "3", imageName: "img3.jpg", tag: "eve" },
    { id: "4", imageName: "img4.jpg", tag: "eve" },
    { id: "5", imageName: "img5.jpg", tag: "eve" },
    { id: "6", imageName: "img6.jpg", tag: "eve" },
    { id: "7", imageName: "img6.jpg", tag: "eve" },
    { id: "8", imageName: "img8.jpg", tag: "eve" },
    { id: "9", imageName: "img9.jpg", tag: "atl" },
    { id: "10", imageName: "img10.jpg", tag: "atl" },
    { id: "11", imageName: "img11.jpg", tag: "atl" },
    { id: "12", imageName: "img12.jpg", tag: "atl" },
    { id: "13", imageName: "img13.jpg", tag: "atl" },
    { id: "14", imageName: "img14.jpg", tag: "atl" },
    { id: "15", imageName: "img15.jpg", tag: "atl" },
    { id: "16", imageName: "img16.jpg", tag: "atl" },
    { id: "17", imageName: "img17.jpg", tag: "atl" },
    { id: "18", imageName: "img18.jpg", tag: "com" },
    { id: "19", imageName: "img19.jpg", tag: "com" },
    { id: "20", imageName: "img20.jpg", tag: "com" },
    { id: "21", imageName: "img21.jpg", tag: "com" },
    { id: "22", imageName: "img22.jpg", tag: "com" },
  ];
  {
    /* useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);*/
  }

  return (
    <div>
      <div className="tagss">
        <TagButton
          name="all"
          tagActive={tag === "all" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="eve"
          tagActive={tag === "eve" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="atl"
          tagActive={tag === "atl" ? true : false}
          handleSetTag={setTag}
        />
        <TagButton
          name="com"
          tagActive={tag === "com" ? true : false}
          handleSetTag={setTag}
        />
      </div>

      <div className="containerr">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-card">
            <img
              className="image"
              src={`./assets/images/photos/${image.imageName}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
