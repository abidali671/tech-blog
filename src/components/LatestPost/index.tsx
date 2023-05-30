import React from "react";
import Card from "../Card";
import ContentContainer from "../ContentContainer";

const LatestPost = () => {
  return (
    <div className=" bg-neutral-50 ">
      <div className="">
        <ContentContainer>
          <span className="flex r gap-1 flex-col">
            <h2 className="font-bold text-4xl ">Latest Post</h2>
            <hr className="w-24 h-[4px]   border-1 rounded bg-orange-700" />
          </span>
          <div className="py-10  grid place-items-center gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {Array(6).fill(
              <Card
                imageUrl="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background-thumb.png"
                altText="shoes"
                title="Top 10 beautiful Place in Bangladesh"
                description="Nulla et commodo turpis. Etiam hendrerit ornare pharetra."
                date="March 25, 2021"
              />
            )}
          </div>
        </ContentContainer>
      </div>
    </div>
  );
};
export default LatestPost;
