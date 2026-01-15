import { useState } from "react";

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

function Pagination() {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <h3>Pagination Example</h3>

      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(prev => prev - 1)}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          style={{
            fontWeight: currentPage === i + 1 ? "bold" : "normal"
          }}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(prev => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
