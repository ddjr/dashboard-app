import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const { url } = await getImage(props.id);
  return <img src={url} className="w-96" />;
}
