import React from 'react';
import Link from 'next/link';

const errorPage = (props) => (
  <div>
    <h1>Ooops! Something went wrong!</h1>
    <p>Try to get <Link href="/"><a>back</a></Link></p>
  </div>
);

export default errorPage;