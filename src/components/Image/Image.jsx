function getImageUrl(name) {
  return new URL(`../../assets/img/${name}.jpg`, import.meta.url).href;
}

export const ImgWrap = ({ img, alt }) => {
  return (
    <picture>
      <source
        srcSet={`${getImageUrl(img)} 1x,
          ${getImageUrl(img + "@2x")} 2x`}
      />
      <img src={getImageUrl(img)} alt={alt} />
    </picture>
  );
};
