import Image, { ImageProps } from "next/image";

type AvatarProps = ImageProps;

const Avatar = (props: AvatarProps) => {
  return <Image {...props} width={20} height={20} className="rounded-full object-cover" />;
};

export default Avatar;