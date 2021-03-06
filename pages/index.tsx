import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/about">
        <a>
          <h2>About Page &rarr;</h2>
          <p>Playwright will test if this link is working.</p>
        </a>
      </Link>
    </div>
  );
};

export default Home;
