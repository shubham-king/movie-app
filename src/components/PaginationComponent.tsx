import { useAppContext } from "@/context/AppContext";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComponent = () => {
  const { state, dispatch } = useAppContext();
  const { currentPage, totalPages } = state;

  const handlePageChange = (page: number) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };

  const maxPagesView = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxPagesView / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesView - 1);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
        {startPage > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {startPage > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}
        {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
          <PaginationItem key={startPage + index}>
            <PaginationLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(startPage + index);
              }}
              isActive={currentPage === startPage + index}
            >
              {startPage + index}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(totalPages);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
