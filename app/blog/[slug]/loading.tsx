import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ArticleSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Aside Section Skeleton (Hidden on Mobile) */}
      <aside className="hidden md:block md:flex-1 md:pr-5">
        <Skeleton height={20} width="50%" />
        <ul className="mt-2.5">
          <li>
            <Skeleton height={15} width="80%" />
          </li>
          <li>
            <Skeleton height={15} width="70%" />
          </li>
        </ul>
      </aside>

      {/* Main Article Section Skeleton */}
      <main className="flex-3">
        {/* Title */}
        <h1>
          <Skeleton height={30} width="70%" />
        </h1>
        {/* Date */}
        <p>
          <Skeleton height={15} width="30%" />
        </p>
        {/* Article Sections */}
        <section className="mt-5">
          <h2>
            <Skeleton height={20} width="60%" />
          </h2>
          <p>
            <Skeleton height={15} width="90%" />
            <Skeleton height={15} width="85%" className="mt-1.25" />
          </p>
        </section>
        <section className="mt-5">
          <h2>
            <Skeleton height={20} width="60%" />
          </h2>
          <p>
            <Skeleton height={15} width="90%" />
            <Skeleton height={15} width="85%" className="mt-1.25" />
          </p>
        </section>
      </main>
    </div>
  );
};

export default ArticleSkeleton;
