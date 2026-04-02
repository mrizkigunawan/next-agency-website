export default function ImageBreak({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="w-full h-screen">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
