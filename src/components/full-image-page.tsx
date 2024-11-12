import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
      <div className="flex w-52 flex-shrink-0 flex-col border-l border-white">
        <div className="overflow-hidden text-ellipsis text-xl font-bold">
          {image.name}
        </div>
      </div>
    </div>
  );
}
