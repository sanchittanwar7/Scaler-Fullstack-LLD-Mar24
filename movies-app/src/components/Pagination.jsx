import React from 'react'

const Pagination = ({pageNo, nextPageFn, previousPageFn}) => {
  return (
    <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">
        <div onClick={previousPageFn} className="px-8"><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={nextPageFn} className="px-8"><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination