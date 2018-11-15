import React from 'react';
import Link from 'next/link';

const indexPage = () => (
  <div>
    <h1>Main Page</h1>
    <Link href="/auth"><a>Auth</a></Link>
  </div>
);

export default indexPage;