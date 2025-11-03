// components/GitHubProfile.jsx
"use client";
import { useState, useEffect } from 'react';

export default function GitHubProfile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/andrelgsilva');
        if (!response.ok) throw new Error('Erro na API');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-700/50 rounded-lg p-6 h-64 animate-pulse">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-6 bg-gray-600 rounded w-32"></div>
            <div className="h-4 bg-gray-600 rounded w-24"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="h-8 bg-gray-600 rounded"></div>
          <div className="h-8 bg-gray-600 rounded"></div>
          <div className="h-8 bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-700/50 rounded-lg p-6 border border-green-500/20 hover:border-green-400 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        {userData?.avatar_url && (
          <img 
            src={userData.avatar_url} 
            alt="Avatar" 
            className="w-16 h-16 rounded-full border-2 border-emerald-400"
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-white">{userData?.name || userData?.login}</h3>
          <p className="text-gray-400">@{userData?.login}</p>
        </div>
      </div>
      
      {userData?.bio && (
        <p className="text-gray-300 text-sm mb-4">{userData.bio}</p>
      )}

      <div className="grid grid-cols-3 gap-4 text-center mb-4">
        <div className="bg-gray-600/50 rounded-lg p-3">
          <p className="text-2xl font-bold text-emerald-400">{userData?.public_repos || 0}</p>
          <p className="text-gray-400 text-xs">Repositórios</p>
        </div>
        <div className="bg-gray-600/50 rounded-lg p-3">
          <p className="text-2xl font-bold text-emerald-400">{userData?.followers || 0}</p>
          <p className="text-gray-400 text-xs">Seguidores</p>
        </div>
        <div className="bg-gray-600/50 rounded-lg p-3">
          <p className="text-2xl font-bold text-emerald-400">{userData?.following || 0}</p>
          <p className="text-gray-400 text-xs">Seguindo</p>
        </div>
      </div>

      <a 
        href={userData?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-500 text-white px-4 py-3 rounded-lg transition-colors font-medium"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Ver Perfil no GitHub
      </a>
    </div>
  );
}