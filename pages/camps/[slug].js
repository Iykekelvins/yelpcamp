import { Layout, Seo, Review, NewComment } from "../../components";
import Image from "next/image";
import Link from "next/link";
import { appSvgs } from "../../public/appSvgs";
import map from "../../assets/Map.png";
import { camps } from "../api/camps";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context/context";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/client";

const Details = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const res = camps && camps.find((camp) => camp.slug === slug);
  const [reviewList, setReviewList] = useState([]);
  const [session, loading] = useSession();
  const { addComment, setAddComment } = useGlobalContext();
  const style = {
    display: "none",
  };

  useEffect(() => {
    res &&
      Object.keys(res).length > 0 &&
      res.reviews &&
      setReviewList(res.reviews);
  }, [res]);

  useEffect(() => {
    localStorage.setItem("reviewList", JSON.stringify(reviewList));
  }, [reviewList]);

  return (
    <div>
      {res && Object.keys(res).length > 0 ? (
        <Layout>
          {addComment && (
            <NewComment reviewList={reviewList} setReviewList={setReviewList} />
          )}
          <Seo title={`YelpCamp | ${res.title}`} />
          <div className="details-page" style={addComment ? style : null}>
            <div className="details-page__left flex-ac-jc">
              <Image
                src={map ? map : null}
                width={250}
                height={300}
                alt="image of location on map"
              />
            </div>
            <div className="details-page__right">
              <div className="details-page__right--top">
                <div className="details-page__right--top__container">
                  <Image
                    src={res.img}
                    height={200}
                    width={300}
                    alt={`image of ${res.title}`}
                  />
                  <div className="flex-ac-jb">
                    <h4>{res.title}</h4>
                    <h5>{res.price}/night</h5>
                  </div>
                  <p>{res.full_info}</p>
                  {session && (
                    <p className="submit-p">
                      Submitted by {session.user.name || session.user.email}
                    </p>
                  )}
                  {!session && !loading && (
                    <p className="submit-p">Submitted by Andrew Mike</p>
                  )}
                </div>
              </div>
              <div className="details-page__right--bottom">
                <div className="details-page__right--bottom__container">
                  {reviewList &&
                    reviewList.map((review) => (
                      <Review review={review} key={review.info} />
                    ))}
                  <div className="btn-container">
                    {!session && !loading && (
                      <p>
                        <Link href="/api/auth/signin">
                          <a>
                            <button
                              className="review-btn-login"
                              onClick={(e) => {
                                e.preventDefault();
                                signIn();
                              }}
                            >
                              Login{" "}
                            </button>
                          </a>
                        </Link>
                        to add a comment
                      </p>
                    )}
                    {session && (
                      <button
                        className="flex-ac review-btn"
                        onClick={() => setAddComment(true)}
                      >
                        <Image
                          src={appSvgs.chat_bubble}
                          width={24}
                          height={25}
                          alt="chat bubble"
                        />
                        <span> Leave a Review</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : null}
    </div>
  );
};

export default Details;
