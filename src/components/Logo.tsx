import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="GenieStation"
      width={36}
      height={36}
      className={className}
      priority
    />
  );
}
