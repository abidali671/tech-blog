import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useReadingTime } from "../../hooks/readingTime";
import { Arrow } from "@/assest/icon";

interface CardPropsT {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  date: string;
  id?: string;
  categoryId?: string;
  imgAtt?: string;
}

const Card = ({
  imageUrl,
  altText,
  title,
  description,
  date,
  id,
  categoryId,
  imgAtt,
}: CardPropsT) => {
  const readingTime = useReadingTime(description); //reading time hook

  return (
    <div>
      <div className="relative h-[240px] min-w-full object-contain  shadow-lg bg-gray-200">
        <Image src={imageUrl} alt={altText} fill />
        {imgAtt && (
          <div
            className="bg-black bg-opacity-50 absolute top-0 right-0 p-2 text-white"
            dangerouslySetInnerHTML={{ __html: imgAtt }}
          />
        )}
      </div>
      <div className="p-4 gap-1 flex flex-col  text-left items-start border border-gray-200 shadow-gray-200 shadow-md border-t-0 bg-white sm:relative sm:w-[95%] sm:top-[-20px]">
        <span className="flex items-center gap-1">
          <hr className="w-10 h-[2px] border-0 rounded bg-orange-700" />
          <p>Interior</p>
        </span>
        <Link href="#">
          <h5 className="text-[28px] font-bold tracking-tight text-gray-900 leading-[32px] font-PT">
            {title}
          </h5>
        </Link>

        <p className="text-gray-500 text-[12px] lg:text-[16px]">
          {description && description}
        </p>
        <p className="text-gray-500 flex items-center gap-2 text-[12px] lg:text-[16px]">
          {date}
          <span className="h-[5px] w-[5px] bg-gray-500 rounded-lg"></span>{" "}
          {readingTime} min read
        </p>

        <Link
          href={{
            pathname: "/blogs/[category]/[blog_detail]",
            query: { category: categoryId, blog_detail: id },
          }}
          className="pt-2 inline-flex items-center text-md font-medium text-center text-black"
        >
          Read Article
          <Arrow />
        </Link>
      </div>
    </div>
  );
};

export default Card;
