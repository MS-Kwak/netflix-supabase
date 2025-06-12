'use client';

import MovieCard from './movie-card';
import { searchMovies } from '@/actions/movie.action';
import { Spinner } from '@material-tailwind/react';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { use, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MovieCardList({ searchInput }) {
  const {
    data,
    isFetching,
    isFetchingNextPage,
    // isFetchingPreviousPage,
    fetchNextPage,
    hasNextPage,
    // hasPreviousPage,
  } = useInfiniteQuery({
    initialPageParam: 1, // 페이지네이션을 위해 초기 페이지를 1로 설정
    queryKey: ['movie', searchInput], // search값이 변경될때마다 재호출이 되겠죠~
    queryFn: ({ pageParam }) =>
      searchMovies({ searchInput, page: pageParam, pageSize: 12 }), // 페이지네이션을 위해 pageParam을 전달
    getNextPageParam: (lastPage) =>
      lastPage.page ? lastPage.page + 1 : null, // 마지막 페이지의 데이터가 없으면 null을 반환하여 더 이상 페이지네이션을 하지 않도록 합니다.
    // 다음 페이지는 현재 페이지 수 + 1
  });

  const { ref, inView } = useInView({
    threshold: 0, // 10%가 보일때
  });

  useEffect(() => {
    // inView가 true가 되면 fetchNextPage를 호출하여 다음 페이지 데이터를 불러옵니다.
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
      console.log('다음 페이지를 불러옵니다!');
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  useEffect(() => {
    // 스크롤이 젤 아래로 내려졌을때 호출되는 로직
    console.log('스크롤이 젤 아래로 내려졌니?!', inView);
    // 여기서 추가적인 데이터를 불러오거나, 페이지네이션을 구현할 수 있습니다.
    // 예를 들어, 다음 페이지의 데이터를 불러오는 함수를 호출할 수 있습니다.
    // getNextPageData();
  }, [inView]);

  return (
    <div className="grid md:grid-cols-4 grid-cols-3 w-full h-full gap-2">
      {(isFetching || isFetchingNextPage) && (
        <Spinner className="h-16 w-16" />
      )}
      {
        <>
          {data?.pages
            ?.map((page) => page.data)
            ?.flat() // pages는 배열이기 때문에 flat()을 사용하여 2차원 배열을 1차원 배열로 변환합니다.
            ?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          {/* 젤 아래로 내렸을때 보이지 않는 어떤 태그가 호출되도록 만들거에요~ */}
          <div ref={ref}></div>
        </>
      }
    </div>
  );
}
