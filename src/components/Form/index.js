function Form({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={(e) => handleChange(e)} required></input>
      <button type="submit">Find the movie!</button>
    </form>
  );
}

export default Form;
