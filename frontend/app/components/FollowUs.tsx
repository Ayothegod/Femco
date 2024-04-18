import { imageNumbers } from "~/lib/database";

export default function FollowUs() {
  return (
    <section className="mt-8 mb-16 px-4">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-serif font-bold tracking-wide">
          Follow Us On Instagram
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
          delectus vel dolor in ex nobis sint itaque vitae, minus saepe?
        </p>
      </div>

      <div className="flex items-center justify-center overflow-x-scroll md:overflow-x-hidden">
        {imageNumbers.map((image, index) => (
          <img
            key={index}
            src={`https://picsum.photos/200/${index % 2 === 0 ? '200' : '300'}?random&format=png`}
            alt="image alts"
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
}
