import './Pagination.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void
}
function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {

    //Geneerating Page number
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className='pagination-container'>

            {/* Previous button */}
            <button
                className='page-btn arrow'
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                ←
            </button>

            {/* Page Number */}
            {pages.map((page) => (
                <button
                    key={page}
                    className={`page-btn ${currentPage === page ? "active" : ""}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                className='page-btn arrow'
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                →
            </button>

        </div>
    );
}

export default Pagination