const SimpleDropdown = ({ selectedValue, setSelectedValue }) => {

  const options = [
    { label: 'Menger Sponge', value: 'menger' },
    { label: 'Jerusalem Cube', value: 'jerusalem' },
    { label: 'Canter Cube', value: 'canter' } ,
  ];

  const handleChange = (event) => {

    setSelectedValue(event.target.value); 
  };

  return (
    <div className='child-floating-box'>
      <select id="simple-select" value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SimpleDropdown;