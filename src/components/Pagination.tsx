import React from 'react';

interface IPagination {
    page: number;
    total: number;
    first: boolean;
    last:boolean;
    previous: () => void;
    next: () => void;
}

const Pagination = ({ page, first, last, total, previous, next }: IPagination) => {
    return (
        <div className="px-5 py-5 rounded-lg bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <span className="text-xs xs:text-sm text-gray-900">
              Mostrando {(total < 10 || last) ? total : (page+1)*10} de {total} Entradas
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l" onClick={() => previous()} disabled={first}>
                Anterior
              </button>
              <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r" onClick={() => next()} disabled={last}>
                Siguiente
              </button>
            </div>
          </div>
    );
}

export default Pagination;