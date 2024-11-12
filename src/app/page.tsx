import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {[...images, ...images, ...images, ...images, ...images, ...images].map(
        (image, idx) => (
          <div key={image.id + "-" + idx} className="flex w-52 flex-col">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                className="aspect-video object-scale-down"
                width={520}
                height={480}
                alt={image.name}
              />
            </Link>
            <div className="overflow-hidden scroll-smooth text-ellipsis hover:scroll-auto">
              {image.name}
            </div>
          </div>
        ),
      )}
    </div>
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
