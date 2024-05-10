import { useEffect, useRef } from "react";

const AutoExpandTextarea = ({ textarea, changeTextarea }) => {
  let textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Resetea la altura
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Ajusta basado en el contenido
    }
  }, [textarea]);

  return (
    <div>
      <textarea
        ref={textareaRef}
        id="textTarea"
        className=" w-full text-xl bg-black resize-none overflow-hidden  focus:border-transparent focus:outline-none"
        value={textarea}
        placeholder="What is happening?!"
        onChange={changeTextarea}
      ></textarea>
    </div>
  );
};

export default AutoExpandTextarea;
