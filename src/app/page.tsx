'use client';
import Head from 'next/head';
import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section>
        <div className='m-10'>
          <PrimaryLink href='/weather'>Weather page</PrimaryLink>
        </div>
      </section>
    </main>
  );
}
