import Image from "next/image";
import Link from "next/link";

const CampItem = ({ img, title, full_info, info, slug }) => {
  return (
    <article className="camp-item">
      <Image
        src={img && img}
        height={200}
        width={300}
        alt={`image of ${title && title}`}
      />
      <h4>{title && title}</h4>
      <p>{info ? info && info : full_info && full_info.slice(0, 100)}</p>
      <Link href={`/camps/${slug && slug}`}>
        <a>
          <button className="camp-btn">View Campground</button>
        </a>
      </Link>
    </article>
  );
};

export default CampItem;
