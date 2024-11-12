// export default async function PhotoModal(props: {
//   params: Promise<{ id: string }>;
// }) {
//   const params = await props.params;
//   const { id: photoId } = params;
//   return <div>{photoId}</div>;
// }

import { getImage } from "~/server/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = Number((await params).id);
  const { url } = await getImage(photoId);
  return (
    <div>
      <img src={url} className="w-96" />
    </div>
  );
}
