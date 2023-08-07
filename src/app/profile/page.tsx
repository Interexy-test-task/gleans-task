import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <Link
        href="/profile/create"
        className="block w-fit mx-auto bg-stone-300 text-black px-5 py-3 rounded-[43px]"
      >
        Create glean
      </Link>

      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </>
  );
}
