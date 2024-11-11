import Link from "next/link";
import Image
 from "next/image";
import { db } from "~/server/db"

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await db.query.images.findMany();
  console.log(images)

  return (
    <main>
      <div className="flex flex-wrap gap-4 p-2">
        {images.map((image) => (
          <div key={image.id} className="w-48 h-32">
            <img src={image.url} />
          </div>
        ))}
      </div>
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Hello World
        </span>
      </div>
    </main>
  );
}
