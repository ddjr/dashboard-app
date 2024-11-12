import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = Number((await params).id);
  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  );
}
