"use client";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName)
  }

  return (
    <div className="w-full flex-center gap-05">
      {!isNext && (
        <button className="px-4 py-[16px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold mt-4" onClick={handleNavigation}>Show More</button>
      )}
    </div>
  )
}

export default ShowMore
