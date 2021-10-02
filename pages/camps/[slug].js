import { Layout, Seo, Review } from "../../components";
import Image from "next/image";
import { appSvgs } from "../../public/appSvgs";
import map from "../../assets/Map.png";
import { camps } from "../../public/camps";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const res = camps.find((camp) => camp.slug.includes(slug));

  const reviews = [
    {
      name: "Adam Jones",
      time: "13h ago",
      info: "Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!",
    },
    {
      name: "Isaac Dylan",
      time: "1 day ago",
      info: "Travelling changes you as a person, you gain more perspective, this is the perfect spot to do that.",
    },
    {
      name: "Hudson Luca",
      time: "3 days ago",
      info: "Definitely recommend going there, not too far and not a lot of people to ruin the experience.",
    },
  ];

  return (
    <div className="container">
      <Layout Nav>
        <Seo title={`YelpCamp | ${res && res.title}`} />
        <div className="details-page">
          <div className="details-page__left flex-ac-jc">
            <Image
              src={map && map}
              width={250}
              height={300}
              alt="image of location on map"
            />
          </div>
          <div className="details-page__right">
            <div className="details-page__right--top">
              <div className="details-page__right--top__container">
                <Image
                  src={res && res.img}
                  height={200}
                  width={300}
                  alt={`image of ${res && res.title}`}
                />
                <div className="flex-ac-jb">
                  <h4>{res && res.title}</h4>
                  <h5>{res && res.price}</h5>
                </div>
                <p>{res && res.full_info}</p>
                <p className="submit-p">Submitted by Andrew Mike</p>
              </div>
            </div>
            <div className="details-page__right--bottom">
              <div className="details-page__right--bottom__container">
                {reviews.map((review) => (
                  <Review review={review} key={review.name} />
                ))}
                <div className="btn-container">
                  <button className="flex-ac">
                    <Image
                      src={appSvgs.chat_bubble}
                      width={24}
                      height={25}
                      alt="chat bubble"
                    />
                    <span> Leave a Review</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Details;
