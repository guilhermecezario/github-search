import React, { ChangeEvent, FormEvent, useState } from 'react';

interface FormProps {
  onSubmit(username: string): void;
}

function Form({onSubmit}:FormProps) {
  const [search, setSearch] = useState<string>("");
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onSubmit(search)
  }

  function handleChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <form className='w-full max-w-xl flex' onSubmit={handleSubmit}>   
      <input
        type="text"
        className="block w-full p-4 pl-10 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400"
        placeholder="Search"
        value={search}
        onChange={handleChangeSearch}
        required
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 ml-1"
      >Buscar</button>
    </form>
  );
}

export default Form;
