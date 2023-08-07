import Image from 'next/image';
import Link from 'next/link';

import Button from '../components/button';

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
        <Button>Create glean</Button>
      </Link>
    </>
  );
}
