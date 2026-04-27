
import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination controls for Maltese Architectural Agency's item lists (Blog, Portfolio).
 * Built with accessibility and responsive flow in mind.
 */
export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Guard for single page scenario
  if (totalPages <= 1) return null;

  // Logic to determine which page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("ellipsis-1");
      }

      // Show pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("ellipsis-2");
      }

      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-12 w-full">
      <div className="text-caption whitespace-nowrap shrink-0">
        Page <span className="font-medium text-foreground">{currentPage}</span> of{" "}
        <span className="font-medium text-foreground">{totalPages}</span>
      </div>

      <ShadcnPagination className="flex-1 min-w-0 justify-end">
        <PaginationContent className="flex-wrap gap-1">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={handlePrev}
              className={cn(
                "interactive h-9",
                currentPage === 1 && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>

          {getPageNumbers().map((page, idx) => (
            <PaginationItem key={typeof page === "string" ? page : `page-${page}`}>
              {typeof page === "number" ? (
                <PaginationLink
                  href="#"
                  isActive={currentPage === page}
                  onClick={(e) => handlePageClick(e, page)}
                  className={cn(
                    "interactive h-9 w-9",
                    currentPage === page && "bg-primary text-primary-foreground hover:bg-primary-hover hover:text-primary-foreground"
                  )}
                >
                  {page}
                </PaginationLink>
              ) : (
                <PaginationEllipsis className="h-9 w-9" />
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={handleNext}
              className={cn(
                "interactive h-9",
                currentPage === totalPages && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </ShadcnPagination>
    </div>
  );
}
