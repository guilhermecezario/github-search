import React from 'react';

import User from '../../interfaces/user.interface';

interface ItemListProps {
  user: User;
  onShowUser(username: string): void;
}

function ItemList({ user, onShowUser }: ItemListProps) {

  function handleClick() {
    onShowUser(user.login)
  }

  return (
    <li className="py-4" onClick={handleClick}>
      <div className="flex items-center space-x-4">
        <img className="w-8 h-8 rounded-full" src={user.avatar_url} alt={user.login} aria-hidden/>

        <div className="text-left">
          <p className="text-sm font-medium text-white">
          {user.login}
          </p>
          <p className="text-sm text-gray-400 truncate">
            {user.html_url}
          </p>
        </div>
      </div>
    </li>
  );
}

export default ItemList;
