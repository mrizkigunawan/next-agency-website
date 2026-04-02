export default function RevealImageBreak({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative -mt-screen">
      <div className="sticky top-0 z-0 h-screen">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="h-screen pointer-events-none" />
    </div>
  );
}
