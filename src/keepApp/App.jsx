import React, { useState } from "react";
import Header from "./Header";
import "../index.css";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
  const [appItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert(note)
    setAddItem((previousData) => {
      return [...previousData, note];
    });

  };

  const ondelete = (id)=>{
    setAddItem((previousData) =>{
      return previousData.filter((item, index) =>{
        return index !== id;
      })
    })
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="main_container">
        {appItem.map((val, index) => {
          return (
            <Note
              title={val.title}
              content={val.content}
              key={index}
              id={index}
              deleteItem={ondelete}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
