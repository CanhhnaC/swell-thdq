import { NextPage } from 'next';
import Link from 'next/link';

const About: NextPage = () => {
  return (
    <div>
      <Link href="/">
        <a>&larr; Go Back</a>
      </Link>
    </div>
  );
};

export default About;
