import React, { useState } from "react";
const CreateNote = (props) => {


  const [expand, setexpand] = useState(false);
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
    e.preventDefault();
    // let val = e.target.value;
    // let nam = e.target.name;
    let { name, value } = e.target;
    // console.log(value, name);
    setnote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(note);
    setnote({
      title: "",
      content: ""
    });
  };

  const expandBox =() =>{
    setexpand(true)
  }

  const srinkit =()=>{
    setexpand(false)
  }

  return (
    <>
      <div className="main_note" onDoubleClick={srinkit}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
              autoComplete="off"
            ></input>
          ) : null}
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="write a note.."
            onClick={expandBox}
          ></textarea>
          {expand ? (
            <button className="btn" onClick={addEvent}>
              +
            </button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
