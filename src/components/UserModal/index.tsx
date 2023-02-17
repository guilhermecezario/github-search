import React from 'react';

import User from '../../interfaces/user.interface';

interface UserModalProps {
  user: User;
  onClose(): void;
}

function App({ user, onClose }: UserModalProps) {
  return (
    <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-2xl rounded-lg shadow bg-gray-700">
        <div className="p-6 text-center">
          <img className="w-20 h-20 rounded-full m-auto" src={user.avatar_url} alt="Neil image" aria-hidden />

          <p className="text-sm font-medium text-white py-2">
            <strong>Username</strong>: {user.login}
          </p>

          <p className="text-sm font-medium text-white py-2">
            <strong>Github</strong>: {user.html_url}
          </p>

          <p className="text-sm font-medium text-white py-2">
            <strong>Localização</strong>: {user.location}
          </p>

          <p className="text-sm font-medium text-white py-2">
            <strong>Numeros de repos</strong>: {user.public_repos}
          </p>

          <button
            type="button"
            className="mt-5 rounded-lg border text-sm p-5 py-2.5 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600"
            onClick={onClose}
          >Fechar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
