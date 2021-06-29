import React from "react";
import Note from "./Note"
const Notes = (props) => {
  return (
    <>
      <div className="notes_container">
        <Note
          title={props.title}
          content={props.content}
          key={props.key}
          id={props.id}
        />
      </div>
    </>
  );
};

export default Notes;


// import React, { useState } from "react";
// import Note from "./Note"
// const Notes = () => {
//   const [appItem, setAddItem] = useState([]);
//   const addNote = (note) => {
//     // alert(note)
//     setAddItem((previousData) => {
//       return [...previousData, note];
//     });
//   };
//   return (
//     <>
//       <div className="notes_container">
//         {appItem.map((val, index) => {
//           return (
//             <Note
//               title={val.title}
//               content={val.content}
//               key={index}
//               id={index}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Notes;