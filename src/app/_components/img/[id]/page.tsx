export default async function PhotoModal(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id: photoId } = params;
  return <div>{photoId}</div>;
}
