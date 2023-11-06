import React from 'react';

export default function NextJS12HomePage(/*props*/) {
  return (
    <div>
      <div className='m-4'>Homepage</div>
      <div>Next</div>
      <button
        onClick={() => {
          // console.log('<NextJS12HomePage /> props:', { props });
          // props: { testGlobalProp: "testGlobalProp"} => props from `_app.tsx`
        }}
      >
        Log props
      </button>
    </div>
  );
}
