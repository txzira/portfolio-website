import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { LuArrowUpRight } from "react-icons/lu";

const TECHSTACK = new Map([
  ["react", "/TechSvgIcons/react.svg"],
  ["angular", "/TechSvgIcons/angular.svg"],
  ["nextjs", "/TechSvgIcons/next-js.svg"],
  ["node", "/TechSvgIcons/node.svg"],
  ["typescript", "/TechSvgIcons/typescript.svg"],
  ["express", "/TechSvgIcons/express.svg"],
  ["stripe", "/TechSvgIcons/stripe.svg"],
  ["prisma", "/TechSvgIcons/prisma.svg"],
  ["postgresql", "/TechSvgIcons/postgresql.svg"],
  ["mysql", "/TechSvgIcons/mysql.svg"],
  ["netlify", "/TechSvgIcons/netlify.svg"],
  ["render", "/TechSvgIcons/render.svg"],
  ["vercel", "/TechSvgIcons/vercel.svg"],
]);

const Project = ({
  projectName,
  projectLink,
  description,
  githubLinks,
  sitePreviewImage,
  techStack,
}: {
  projectName: string;
  projectLink: string;
  description: string;
  githubLinks: { text: string; link: string }[];
  sitePreviewImage: string;
  techStack: Array<string>;
}) => {
  return (
    <div
      className="col d-flex flex-column w-100 gap-3 p-3 h-75"
      style={{ minHeight: "600px", height: "max-content" }}>
      <Link href={projectLink} className="position-relative w-100 h-50">
        <Image
          className="object-fit-fill "
          src={sitePreviewImage}
          fill={true}
          alt="project image"
        />
      </Link>
      <div className="">
        <h2>{projectName}</h2>
        <p>{description}</p>
        {githubLinks && githubLinks.length && (
          <div>
            {githubLinks.map((githubLink) => {
              return (
                <p key={githubLink.link}>
                  <span>{githubLink.text}</span>:{" "}
                  <Link href={githubLink.link}>{githubLink.link}</Link>
                </p>
              );
            })}
          </div>
        )}
      </div>
      <div
        className="w-100 d-flex flex-row align-items-center justify-content-between"
        style={{ height: "max-content" }}>
        <div className="d-flex flex-row align-items-center gap-2">
          {techStack.map((tech, index) => {
            return (
              <div
                key={index}
                className="position-relative"
                style={{ width: "40px", height: "40px" }}>
                <Image src={TECHSTACK.get(tech)!} alt={`${tech}-logo`} fill />
              </div>
            );
          })}
        </div>
        <div>
          <Link
            href={projectLink}
            className="d-flex flex-row align-items-center fs-5 text-dark ">
            Check Live Site <LuArrowUpRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
