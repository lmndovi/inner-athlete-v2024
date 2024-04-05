import React from "react";

import gym from "@/public/gym.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <div className="p-5 flex flex-col space-y-10 absolute top-20 pb-20">
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-6xl font-bold">Blog.</h1>
        <p className="text-lg">
          Statically generated blog with Next.js and Sanity.
        </p>
      </div>
      <section className="space-y-5">
        <div>
          <Image
            src={gym}
            alt="Gym workout"
            className="h-[270px] w-screen rounded-sm object-cover"
          />
        </div>

        <h2 className="text-5xl">Blog Post #1</h2>

        <p>Publishing Date</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
          atque dolorem accusantium, magni ex neque possimus dicta repellendus
          odio fuga doloribus corporis fugit praesentium sapiente alias tempora
          labore aut.
        </p>
        <div className="flex justify-between">
          <Button variant="link" className="-ml-3">
            Read more
          </Button>
          <div className="flex items-center space-x-3">
            <span>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </span>
            <h3 className="font-bold text-xl">Anonymous</h3>
          </div>
        </div>
      </section>
      <section className="space-y-5">
        <div>
          <Image
            src={gym}
            alt="Gym workout"
            className="h-[270px] w-screen rounded-sm object-cover"
          />
        </div>

        <h2 className="text-5xl">Blog Post #1</h2>

        <p>Publishing Date</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
          atque dolorem accusantium, magni ex neque possimus dicta repellendus
          odio fuga doloribus corporis fugit praesentium sapiente alias tempora
          labore aut.
        </p>
        <div className="flex justify-between">
          <Button variant="link" className="-ml-3">
            Read more
          </Button>
          <div className="flex items-center space-x-3">
            <span>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </span>
            <h3 className="font-bold text-xl">Anonymous</h3>
          </div>
        </div>
      </section>
      <section className="space-y-5">
        <div>
          <Image
            src={gym}
            alt="Gym workout"
            className="h-[270px] w-screen rounded-sm object-cover"
          />
        </div>

        <h2 className="text-5xl">Blog Post #1</h2>

        <p>Publishing Date</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis
          atque dolorem accusantium, magni ex neque possimus dicta repellendus
          odio fuga doloribus corporis fugit praesentium sapiente alias tempora
          labore aut.
        </p>
        <div className="flex justify-between">
          <Button variant="link" className="-ml-3">
            Read more
          </Button>
          <div className="flex items-center space-x-3">
            <span>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </span>
            <h3 className="font-bold text-xl">Anonymous</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
