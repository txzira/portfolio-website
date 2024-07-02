import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section>
      <h1 className="text-decoration-underline">About Me</h1>
      <div className="d-inline-block fs-5">
        <div
          className=" position-relative ratio ratio-1x1 float-start me-2"
          style={{ height: "200px", width: "200px" }}>
          <Image
            src="/Images/me.jpg"
            fill
            alt="profile picture"
            className="rounded-circle object-fit-contain "
          />
        </div>
        <p>
          Hello vistor, my name is Ronnie Ayers and I specialize in frontend
          development creating responsive and user-friendly ecommerce websites
          that perform across various devices and browsers.
        </p>
        <p>
          I have a strong foundation in HTML, CSS, and JavaScript, which allows
          me to create interactive user interfaces. I&apos;m experienced in
          leveraging frameworks like Angular and React.js (NextJs) and
          third-party libraries to build dynamic single-page applications (SPAs)
          that enhance user engagement and experience. My developer knowledge
          extends to backend technologies such as Node.js, Prisma ORM, and SQL,
          enabling me to develop server-side logic and APIs that power my web
          applications.
        </p>
        <p>
          Coding is a never ending puzzle in my eyes and thus a never ending
          problem solving game to me which is why I have the tenacity and
          passion to see any project I commit myself to, to the end. Whether
          it&apos;s optimizing performance, ensuring accessibility, or
          integrating third-party services, I&apos;m dedicated to delivering
          high-quality, scalable solutions that meet both business goals and
          user needs. I&apos;m passionate about staying updated with the latest
          web technologies and best practices, continuously improving my skills
          to build innovative and efficient web solutions as learning is never
          done.
        </p>
      </div>
    </section>
  );
};

export default About;
