const Input = ({ label, inputType, value, onChange }) => {

    const handleOnChange = (e)=>{
      onChange(e.target.value)
    }
  
    return (
      <div className='flex flex-col gap-1'>
        <label className='text-2xl font-medium'>{label}:</label>
        <input 
          type={inputType} 
          value={value}
          onChange={handleOnChange}
          className='w-full h-10 rounded-full bg-primary-3 bg-opacity-70  outline-black p-4'/>
      </div>
    );
  };
  
  export default Input;