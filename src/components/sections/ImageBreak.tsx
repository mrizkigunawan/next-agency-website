import Image from "next/image";

export default function ImageBreak({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="w-full h-screen relative">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
}
