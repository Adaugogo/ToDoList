import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
  const [isTextAreaClicked, setTextAreaClicked] = React.useState(false)
  function handletextArea() {
    setTextAreaClicked(true)
  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


  if (isTextAreaClicked) {
    return (
      <div>
        <form className="create-note">
          <input
            name="title"
            onChange={ handleChange }
            value={ note.title }
            placeholder="Title"
          />
          <textarea
            name="content"
            onChange={ handleChange }
            value={ note.content }
            placeholder="Take a note..."
            rows="3"
          />
          <Zoom in={true}>   
          <Fab onClick={ submitNote }><AddIcon /></Fab >
          </Zoom>
        </form>
      </div>
    )
    } else {
    return (
      <form className="create-note">
        <textarea
          name="content"
           onChange={ handleChange }
          onClick={ handletextArea }
          value={ note.content }
          placeholder="Take a note..."
          rows="1"
        />
      </form>
    );
  }

}

export default CreateArea;
