export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const { id: photoId } = params;
  return <div>{photoId}</div>;
}
