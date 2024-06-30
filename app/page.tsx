import Image from "next/image";
import Project from "./components/Project";
import Contact from "./Contact";
import About from "./components/About";

export default function Home() {
  return (
    <main
      className="d-flex flex-column flex-1 w-100 h-100 p-5 gap-5 overflow-y-scroll"
      style={{
        background:
          "linear-gradient(325deg, rgba(34,97,195,1) 10%, rgba(253,195,45,1) 100%)",
      }}>
      <div
        id="about"
        className="container w-100 bg-light rounded shadow"
        style={{ height: "max-content" }}>
        <About />
      </div>

      <div
        id="projects"
        className="container w-100  bg-light rounded shadow"
        style={{ height: "max-content" }}>
        <h1 className="text-decoration-underline">Projects</h1>
        <div className="row h-100 w-100">
          <Project
            projectName="Angular Ecommerce Website"
            projectLink="https://txzira-ecommerce.netlify.app"
            description="Ecommerce test site developed with the Angular framework and NodeJs. This site is fully functional and includes custom checkout with stripe, authentication, authorization, as well as the admin portal that manages server data."
            githubLinks={[
              {
                text: "Frontend",
                link: "https://github.com/txzira/store-frontend",
              },
              {
                text: "Backend",
                link: "https://github.com/txzira/store-backend",
              },
            ]}
            sitePreviewImage="/Images/angular-site-preview.png"
            techStack={[
              "netlify",
              "render",
              "angular",
              "typescript",
              "stripe",
              "prisma",
              "node",
              "express",
              "postgresql",
            ]}
          />
          <Project
            projectName="Next Js Ecommerce Website"
            projectLink="https://next-js-ecommerce-vert-pi.vercel.app"
            description="Ecommerce test site developed with NextJs. **WIP**"
            githubLinks={[
              {
                text: "Fullstack",
                link: "https://github.com/txzira/next-js-ecommerce",
              },
            ]}
            sitePreviewImage="/Images/nextjs-site-preview.png"
            techStack={[
              "vercel",
              "nextjs",
              "react",
              "typescript",
              "stripe",
              "prisma",
              "postgresql",
            ]}
          />
        </div>
      </div>

      <div
        id="socials"
        className="container w-100 bg-light rounded shadow"
        style={{ height: "max-content" }}>
        <Contact />
      </div>
    </main>
  );
}
