import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      <main
        id="#main"
        className="flex flex-col justify-center items-center h-screen  space-y-5 bg-red-500 snap-center"
      >
        <div>
          <Image
            src="/logoHeadingParagraph.svg"
            alt="Inner Athlete"
            height={500}
            width={300}
          />
        </div>
        <div className="flex space-x-2">
          <Link href="/sign-up">
            <Button>Join Us</Button>
          </Link>

          <Link href="#about">
            <Button>Learn More</Button>
          </Link>
        </div>
      </main>
      <section
        id="about"
        className="flex-col space-y-8 p-5 pt-20 h-screen snap-center"
      >
        <h2 className="text-3xl">About</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          impedit tempora provident vitae, temporibus, fugit dolores maiores
          molestias quo mollitia fuga alias culpa obcaecati. Maxime laboriosam
          praesentium optio tempora eligendi. Impedit ipsam numquam a, aut quos
          dolores enim consequuntur odit ipsum nesciunt saepe earum magnam.
          Voluptate delectus eos aliquam minima? Harum in consequatur,
          asperiores sequi eos qui a nisi explicabo. Nam impedit commodi at et
          cupiditate cum dolorem maxime eaque sit, excepturi doloribus earum,
          expedita ab debitis dicta quo odio? Corporis qui magni libero quas
          alias quae nam blanditiis quibusdam! Exercitationem veritatis, ut
          provident autem nostrum tempore reiciendis sint veniam omnis eligendi
          aut voluptatum quibusdam nam qui velit at enim nulla dolorem sapiente
          maiores vero dolores aperiam! Error, incidunt aspernatur. Aliquam,
          ullam repellendus molestias quae itaque aut totam quod necessitatibus,
          exercitationem corporis dignissimos tenetur tempora libero. Accusamus,
          excepturi, in, perspiciatis hic autem ea tenetur consequuntur nostrum
          dolorem nam dicta dolorum.
        </p>
      </section>
      <section
        id="contact"
        className="flex-col space-y-8 p-5 pt-16 h-screen bg-orange-500 snap-center"
      >
        <div>
          <Contact />
        </div>
      </section>
      {/* <section className="snap-center bg-blue-500">
        <Footer />
      </section> */}
    </div>
  );
}
