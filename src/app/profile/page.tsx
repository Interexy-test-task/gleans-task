import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>

      <Link href="/profile/create">
        <button className="bg-stone-300 text-black px-4 py-3 rounded-[43px]">
          Create glean
        </button>
      </Link>
    </>
  );
}
