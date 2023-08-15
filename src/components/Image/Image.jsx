export const ImgWrap = ({ img, alt }) => {
    const image = "src/assets/img";
    return (
      <picture>
        <source
          srcSet={`${image}/${img}.jpg 1x,
              ${image}/${img}@2x.jpg 2x`}
        />
        <img src={image + "/${img}.jpg"} alt={alt} />
      </picture>
    );
  };