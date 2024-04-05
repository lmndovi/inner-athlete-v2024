import Image from "next/image";
import Link from "next/link";
import React from "react";

const LargeLogo = () => {
  return (
    <Link href="/">
      <div>
        <Image
          src="/logoHeading.svg"
          alt="Inner Athlete"
          height={180}
          width={180}
        />
      </div>
    </Link>
  );
};

export default LargeLogo;
