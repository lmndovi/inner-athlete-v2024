import React from "react";

const blogPost =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est sapiente necessitatibus aspernatur minus sit accusantium ducimus odit itaque. Nisi praesentium commodi corrupti atque esse perferendis aspernatur omnis aliquid magni? Voluptatum sit assumenda veniam, minima cum consectetur alias ab ex officiis accusamus saepe eum ipsa laboriosam iusto porro autem necessitatibus corrupti debitis libero nam nostrum dicta aut ad ipsum? Repellat?\n\n Tenetur, eveniet obcaecati facilis voluptatem, hic doloremque perspiciatis cupiditate asperiores laborum possimus tempora illum, recusandae earum reprehenderit saepe ipsum explicabo sapiente cumque. Beatae similique sunt placeat explicabo autem expedita corrupti? Numquam aspernatur saepe ducimus eligendi nam quae fugit tempore quam, molestias ullam obcaecati nisi exercitationem facere odit minima similique suscipit labore aut ad. Ipsa labore temporibus deleniti sapiente odio quisquam.\n\n Suscipit enim iste labore sunt voluptatum debitis quo ut? Aspernatur doloribus ex nisi aliquam molestiae laborum explicabo delectus, reiciendis sint consectetur maiores quis, aliquid animi maxime porro, blanditiis enim. Enim! Iste doloremque hic ipsam laudantium magni molestiae eaque voluptas eius ex voluptatem. Ullam debitis cumque totam, autem ea corporis nostrum, repudiandae voluptates possimus, doloremque ipsum laborum quisquam.\n\n Error, consequatur dolorem! Nobis exercitationem, nemo repellendus facere consectetur non expedita magni temporibus accusantium? Fugit maxime vero debitis dolor ducimus. Odio aperiam dolorem expedita, rerum, ratione nemo, cumque tempora sunt dicta molestias eveniet? Culpa, dolores doloremque? Inventore minus rem cupiditate tempora nihil! Commodi repudiandae nemo aut error tempore perferendis voluptatibus. Iusto explicabo perferendis doloribus in, consequatur quis. Non ipsa molestiae nobis impedit dicta.\n\n Ducimus, illum quidem? Pariatur delectus nostrum dolore minima accusantium dolorum modi totam commodi libero vel temporibus quo possimus error eveniet quasi fugit earum reiciendis, neque velit excepturi perferendis quaerat. Accusantium. Eveniet, aliquam eaque illum et necessitatibus nostrum temporibus totam ab, sint explicabo esse architecto facilis. Cumque provident dignissimos, tempora, fugiat nulla maiores quis ad nihil inventore quisquam, iste doloribus debitis.";

const page = () => {
  // Split the blog post into paragraphs
  const paragraphs = blogPost.split("\n\n");

  return (
    <div className="flex flex-col space-y-10 relative top-48 p-10 z-">
      <div className="flex flex-col space-y-2">
        <h1 className="text-4xl">Blog Title</h1>
        <h2 className="text-sm">Blog subheading</h2>
      </div>

      {/* Map over paragraphs and render them as separate <p> elements */}
      {paragraphs.map((paragraph, index) => (
        <p className="text-sm" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default page;
