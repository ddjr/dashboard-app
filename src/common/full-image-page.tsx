import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="m-auto flex items-center justify-center">
        <img src={image.url} className="object-contain" />
      </div>
      <div className="flex min-w-52 flex-col border-l border-white">
        <div className="overflow-hidden text-ellipsis border-b p-2 text-center text-xl">
          {image.name}
        </div>
        <div className="flex flex-col p-2">
          <span>uploaded by: </span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created on: </span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
