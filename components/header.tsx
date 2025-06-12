'use client';

import Logo from './logo';

export default function Header({ searchInput, setSearchInput }) {
  const onChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-30 p-4 bg-gray-900 flex items-center justify-between">
      <nav className="flex items-center gap-4">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className="flex w-full max-w-70 gap-2 items-center border-1 border-white  bg-transparent text-white rounded-md p-2">
        <i className="fas fa-search text-white mr-2" />
        <input
          className="bg-transparent"
          type="text"
          placeholder="Search movies"
          value={searchInput}
          onChange={onChangeSearch}
        />
      </div>
    </header>
  );
}
