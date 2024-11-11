import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main>
      <div className="flex flex-wrap gap-4 p-2">
        {[...images, ...images, ...images].map((image) => (
          <div key={image.id} className="flex w-52 flex-col">
            <img src={image.url} className="aspect-video object-cover" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      <div className="text-5xl font-extrabold">
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Hello World
        </span>
      </div>
    </main>
  );
}
