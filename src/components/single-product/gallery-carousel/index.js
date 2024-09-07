import { isEmpty, isArray } from "lodash";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import Image from "next/image";
import { ImageLoader } from "../../../utils/image-loader"

const GalleryCarousel = ({ gallery, image }) => {
  if (isEmpty(gallery) || !isArray(gallery)) {
    return null;
  }

  return (
    <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex  flex-col lg:gap-8 sm:gap-6 gap-4">
      {image.description ? (
        <div
          className="aspect-w-16 aspect-h-9"
          dangerouslySetInnerHTML={{
            __html: image.description.slice(3).slice(0, -5),
          }}
        />
      ) : (
        <div className=" w-full flex justify-center items-center">
          <Image
            loader={ImageLoader}
            src={image.sourceUrl}
            alt={image.altText}
            height={640}
            width={640}
          />

        </div>
      )}

      <LightGallery
        plugins={[lgZoom, lgVideo]}
        mode="lg-fade"
        elementClassNames="w-full grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-6"
      >
        {gallery.map((item) => (
          <a
            className="gallery-item bg-gray-100 flex justify-center items-center"
            data-src={item.description || item?.sourceUrl.replace("https://www", "https://i0.wp.com/www")}
            key={item.id}
          >
            <Image
              loader={ImageLoader}
              className="img-responsive"
              src={item?.sourceUrl}
              alt={item.altText}
              width={384}
              height={384}
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default GalleryCarousel;
