import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <>
      <div className="flex flex-wrap gap-4 p-2">
        {images.map((image, idx) => (
          <div key={image.id} className="flex w-52 flex-col">
            <img src={image.url} className="aspect-video object-cover" />
            <div className="overflow-hidden scroll-smooth text-ellipsis hover:scroll-auto">
              {image.name}
            </div>
          </div>
        ))}
      </div>
      <div className="text-5xl font-extrabold">
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Hello World
        </span>
      </div>
    </>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
