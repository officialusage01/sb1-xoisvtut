import React from 'react';
import { ImageUpload } from './components/ImageUpload';
import { ImageIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-purple-900 shadow-lg border-b border-purple-800">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <ImageIcon className="h-8 w-8 text-purple-400 mr-3" />
            <h1 className="text-2xl font-bold text-white">Image Gallery</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <ImageUpload />
      </main>
    </div>
  );
}

export default App;
