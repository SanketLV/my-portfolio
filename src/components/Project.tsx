import { useState } from "react";
import { Project as ProjectType } from "../constants";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}: ProjectType & { setPreview: (image: string | null) => void }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" alt="Right arrow" className="w-5" />
        </button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
