import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section>
      <h1 className="text-decoration-underline">Socials</h1>
      <div className="d-flex flex-row  align-items-center pb-3 px-3 gap-2">
        <Link href="mailto:ronnsr15@gmail.com">
          <Image
            src="/TechSvgIcons/gmail.svg"
            height={80}
            width={80}
            alt="LinkedIn Logo"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ronnie-ayers-656aa4310/"
          className="relative">
          <Image
            src="/TechSvgIcons/linkedin.svg"
            height={80}
            width={80}
            alt="LinkedIn Logo"
          />
        </Link>
        <Link href="https://github.com/txzira" className="relative">
          <Image
            src="/TechSvgIcons/github.svg"
            height={80}
            width={80}
            alt="LinkedIn Logo"
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
