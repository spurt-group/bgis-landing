import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import gallery5 from "../../assets/images/gallery5.png";
import gallery6 from "../../assets/images/gallery6.png";

const Gallery = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-helvetica-neue-bold text-center text-[#151D48] mb-12">
          Gallery
        </h2>

        <div
          className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4 lg:grid-rows-2
        "
        >
          <img
            src={gallery1}
            alt="Gallery 1"
            className="
              w-full h-full object-cover rounded-xl
              lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-1
            "
          />

          <img
            src={gallery2}
            alt="Gallery 2"
            className="
              w-full h-full object-cover rounded-xl
              lg:col-start-1 lg:row-start-2
            "
          />

          <img
            src={gallery3}
            alt="Gallery 3"
            className="
              w-full h-full object-cover rounded-xl
              lg:col-start-2 lg:row-start-2
            "
          />

          <img
            src={gallery4}
            alt="Gallery 4"
            className="
              w-full h-full object-cover rounded-xl
              lg:col-start-3 lg:row-start-1 lg:row-span-2
            "
          />

          <img
            src={gallery5}
            alt="Gallery 5"
            className="
              w-full h-full object-cover rounded-xl
              lg:col-start-4 lg:row-start-1
            "
          />

          <img
            src={gallery6}
            alt="Gallery 6"
            className="
              w-full h-full object-cover rounded-xl
              lg:col-start-4 lg:row-start-2
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
