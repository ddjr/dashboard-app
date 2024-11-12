import FullPageImageView from "~/common/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = Number((await params).id);
  if (Number.isNaN(photoId)) throw Error("Invalid photo id");
  return <FullPageImageView id={photoId} />;
}
