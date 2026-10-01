import Image from "next/image";

type Props = { name: string; role: string; avatar: string; quote: string };

export function TestimonialCard({ name, role, avatar, quote }: Props) {
  return (
    <figure className="self-start rounded-3xl bg-white p-6">
      <Image
        src={avatar}
        alt={name}
        width={160}
        height={160}
        className="h-20 w-20 rounded-full object-cover"
      />
      <figcaption className="mt-5">
        <p className="font-heading text-[20px] font-semibold leading-7.5 tracking-[-0.02em] text-black">
          {name}
        </p>
        <p className="text-[18px] leading-7 text-brand">{role}</p>
      </figcaption>
      <blockquote className="mt-6 text-[18px] leading-[1.6] text-body-2">
        &quot;{quote}&quot;
      </blockquote>
    </figure>
  );
}
