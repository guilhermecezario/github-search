import React from 'react';

import User from '../../interfaces/user.interface';
import ItemList from '../ItemList';

interface ListProps {
  users: User[];
  onHandleShowUser(username: string): void;
}

function List({ users, onHandleShowUser } :ListProps) {

  return (
    <ul className='list w-full max-w-xl divide-y divide-gray-700'>
      {users.map((user: any) => (
        <ItemList user={user} key={user.id} onShowUser={onHandleShowUser}/>
      ))}
    </ul>
  );
}

export default List;
