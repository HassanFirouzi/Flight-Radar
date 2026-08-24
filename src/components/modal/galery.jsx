import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Galery = ({ images }) => {
  const arr = images?.large
    ? images.large
    : images?.medium
      ? images.medium
      : images?.thumbnails;

  return (
    <div className="rounded-2xl overflow-hidden">
      {arr?.length > 0 ? (
        <Splide>
          {arr.map((item, key) => (
            <SplideSlide key={key}>
              <img
                src={item.src}
                alt="plane"
                className="w-full h-28 object-cover hover:scale-105 transition"
              />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="h-28 bg-zinc-200/10 grid place-items-center rounded-2xl text-zinc-300">
          <span>Fotoğraf içeriği bulunmuyor</span>
        </div>
      )}
    </div>
  );
};

export default Galery;
