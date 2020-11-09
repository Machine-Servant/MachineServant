import React from 'react';

type PaginationProps = {
  numPages: number;
  totalCount: number;
  itemsPerPage: number;
  currentIndex: number;
  indexStart?: number;
  basePath: string;
  labelFirstPageWithIndex?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showDetails?: boolean;
  buttonTextClassNames?: string;
  paginationTextClassNames?: string;
  detailsTextClassNames?: string;
  disabledTextClassNames?: string;
};

export const Pagination: React.FC<PaginationProps> = ({
  numPages,
  totalCount,
  itemsPerPage,
  currentIndex,
  indexStart = 1,
  basePath,
  labelFirstPageWithIndex = false,
  size = 'sm',
  showDetails = false,
  buttonTextClassNames = 'text-gray-700 hover:text-gray-500',
  paginationTextClassNames = 'text-gray-700 hover:text-gray-500',
  detailsTextClassNames = 'text-gray-700',
}) => {
  const startPath = labelFirstPageWithIndex
    ? `${basePath}/${indexStart}`
    : basePath;
  const isFirstPage = currentIndex - indexStart === 0;
  const isLastPage = currentIndex === numPages;

  const prevIndex = isFirstPage
    ? labelFirstPageWithIndex
      ? currentIndex - 1
      : null
    : currentIndex - 1;
  const prev =
    prevIndex && currentIndex - 1 !== indexStart
      ? `${basePath}/${prevIndex}`
      : startPath;

  const nextIndex = isLastPage ? currentIndex : currentIndex + 1;
  const next = `${basePath}/${nextIndex}`;

  const handlePrevDisabledClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    if (isFirstPage) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleNextDisabledClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    if (isLastPage) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      <div className="flex justify-between flex-1 sm:hidden">
        <a
          href={prev}
          className={`relative inline-flex items-center px-4 py-2 text-${size} font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ${buttonTextClassNames}`}
          onClick={handlePrevDisabledClick}
        >
          Previous
        </a>
        <a
          href={next}
          className={`relative inline-flex items-center px-4 py-2 text-${size} font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ${buttonTextClassNames}`}
          onClick={handleNextDisabledClick}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        {showDetails ? (
          <div>
            <p className={`text-${size} leading-5 ${detailsTextClassNames}`}>
              Showing <span className="font-medium">{currentIndex}</span> to{' '}
              <span className="font-medium">
                {currentIndex - indexStart + itemsPerPage}
              </span>{' '}
              of <span className="font-medium">{totalCount}</span>
            </p>
          </div>
        ) : (
          <div />
        )}
        <nav className="relative z-0 inline-flex">
          <a
            href={prev}
            className={`relative inline-flex items-center px-2 py-2 text-${size} font-medium leading-5 transition duration-150 ease-in-out focus:z-10 focus:outline-none ${paginationTextClassNames}`}
            aria-label="Previous"
            onClick={handlePrevDisabledClick}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          {Array.from({ length: numPages }).map((_, i) => {
            const href = i === 0 ? startPath : `${basePath}/${i + indexStart}`;
            const isActive = i + indexStart === currentIndex;
            return (
              <a
                key={href}
                href={href}
                className={`relative inline-flex items-center px-2 py-2 text-${size} leading-5 font-medium focus:z-10 focus:outline-none transition ease-in-out duration-150 ${paginationTextClassNames} ${
                  isActive ? 'underline' : ''
                }`}
              >
                {i + indexStart}
              </a>
            );
          })}
          <a
            href={next}
            className={`relative inline-flex items-center px-2 py-2 text-${size} font-medium leading-5 transition duration-150 ease-in-out focus:z-10 focus:outline-none ${paginationTextClassNames}`}
            onClick={handleNextDisabledClick}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  );
};
