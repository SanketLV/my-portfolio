import { useState } from "react";
import Project from "../components/Project";
import { myProjects, Project as ProjectType } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    x.set(clientX + 20);
    y.set(clientY + 20);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      // className="relative c-space section-spacing"
      className="relative c-space mt-20 md:mt-30"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project: ProjectType) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          src={preview}
          alt=""
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
