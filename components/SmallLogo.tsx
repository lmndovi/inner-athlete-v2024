import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmallLogo = () => {
  return (
    <Link href="/">
      <div>
        <Image src="/logoIcon.svg" alt="Inner Athlete" height={30} width={30} />
      </div>
    </Link>
  );
};

export default SmallLogo;
