'use client';

import MovieCardList from '@/components/movie-card-list';
import Header from '@/components/header';
import { useState } from 'react';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <main className="mt-20">
        <MovieCardList searchInput={searchInput} />
      </main>
    </>
  );
}
