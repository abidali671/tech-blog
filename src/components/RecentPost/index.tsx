import React from "react";
import Card from "../Card";
import ContentContainer from "../ContentContainer";
const RecentPost = () => {
  return (
    <div className="bg-white">
      <ContentContainer className="flex flex-col justify-center">
        <span>
          <h2 className="font-bold text-4xl ">Recent Posts</h2>
          <hr className="w-24 h-[4px]   border-1 rounded bg-orange-700" />
        </span>

        <div className="py-10 grid place-items-center  gap-0 grid-cols-[repeat(3,minmax(300px,1fr))]">
          {Array(3).fill(
            <Card
              imageUrl=""
              altText="shoes"
              title="Top 10 beautiful Place in Bangladesh"
              description="Nulla et commodo turpis. Etiam hendrerit ornare pharetra."
              date="March 25, 2021"
            />
          )}
        </div>
      </ContentContainer>
    </div>
  );
};

export default RecentPost;