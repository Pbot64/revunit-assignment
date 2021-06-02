const Filter = ({ inputValue, filterOnChange, labelText, style }) => (
  <div style={style}>
    <label htmlFor="search">{labelText} </label>
    <input type="text" value={inputValue} onChange={filterOnChange} />
  </div>
);

export { Filter };
