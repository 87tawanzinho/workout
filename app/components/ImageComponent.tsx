import Image, { StaticImageData } from "next/image";

interface propsSettings {
  img: StaticImageData;
  alt: string;
  h: number;
  w: number;
}
export default function ImageDefaultTsx(props: propsSettings) {
  return (
    <Image
      className="object-cover "
      src={props.img}
      alt={props.alt}
      height={props.h}
      width={props.w}
    />
  );
}
