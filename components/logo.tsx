'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image
          src="/tmdbflix_logo.png"
          alt="Logo"
          width={24}
          height={22}
          className="!w-20 !h-auto"
        />
      </div>
    </Link>
  );
}
