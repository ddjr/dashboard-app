import Link from "next/link";
import Image
 from "next/image";
import { mock } from "node:test"
import { db } from "~/server/db"
const mockUrls = [
  "https://utfs.io/f/E0EtgfoZ0Ho5gvZSAJeN02mWs6eTX5hEAHy7pMqt3ox8ijSB",
  "https://utfs.io/f/E0EtgfoZ0Ho59nUoH3QOQ8hJelnYHUF2ILzrqZicysC34t7f",
  "https://utfs.io/f/E0EtgfoZ0Ho5pTUaUh01SesgCKcVFPmWxvHulAdanZYytwU9",
  "https://utfs.io/f/E0EtgfoZ0Ho5SJRQuTImSZg2kXqrlT3LPhn5swJHOKEjD1pA"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts)

  return (
    <main>
      <div className="flex flex-wrap gap-4 p-2">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages,...mockImages,...mockImages].map((image, idx) => (
          <div key={idx} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }
      </div>
      Hello (gallery in progress)
      <a href="/layer2">forward</a>
    </main>
  );
}
