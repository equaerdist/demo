import { MutableRefObject, useEffect, useState, useRef } from "react";

export const useScrollPagination = (
  scrollRef: MutableRefObject<null | HTMLDivElement>
) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const lastPageChangeRef = useRef<number>(Date.now()); // Ссылка для отслеживания времени последнего изменения страницы

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const currentTime = Date.now();

    // Проверка на прокрутку до конца и прошло ли 1 секунда с последнего изменения
    if (
      scrollHeight - scrollTop <= clientHeight + 100 &&
      currentTime - lastPageChangeRef.current >= 2000
    ) {
      setPage((prevPage) => {
        lastPageChangeRef.current = currentTime; // Обновляем время последнего изменения
        return prevPage + 1;
      });
    }
  };

  useEffect(() => {
    setPage(1); // Сбрасываем страницу при изменении pageSize
  }, [pageSize]);

  return { page, pageSize, handleScroll, setPage, setPageSize };
};
