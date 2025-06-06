const React = require('react');
const { useState, useRef } = React;

const WordRelay = (props) => {
  const [word, setWord] = useState('아메리카노');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('')
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('')
      inputRef.current.focus();
    }
  }

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  return (
      <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          <div>
            <label htmlFor="inputBox">누르면 input 박스로..</label>
          </div>
          <input ref={inputRef} id="inputBox" className='input' value={value} onChange={onChangeInput} />
          <button>입력!</button>
        </form>
        <div>{result}</div>
      </>
  )
}

module.exports = WordRelay;

