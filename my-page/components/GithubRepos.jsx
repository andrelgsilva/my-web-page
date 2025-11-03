// components/GitHubRepos.jsx
"use client";
import { useState, useEffect } from 'react';

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/andrelgsilva/repos?sort=updated&per_page=6');
        if (!response.ok) throw new Error('Erro na API');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-700/50 rounded-lg p-6">
        <h3 className="font-semibold text-white mb-4 text-xl">Repositórios</h3>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-600/50 rounded-lg p-4">
              <div className="h-6 bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-600 rounded w-1/2 mb-3"></div>
              <div className="h-6 bg-gray-600 rounded w-24"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-700/50 rounded-lg p-6 border border-green-500/20 hover:border-green-400 transition-all duration-300">
      <h3 className="font-semibold text-white mb-4 text-xl">Repositórios Recentes</h3>
      <div className="space-y-4">
        {repos.map(repo => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-600/50 rounded-lg hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-emerald-400/30"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-semibold text-lg hover:text-emerald-400 transition-colors">
                {repo.name}
              </h4>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  ⭐ {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  🍴 {repo.forks_count}
                </span>
              </div>
            </div>
            
            {repo.description && (
              <p className="text-gray-300 text-sm mb-3">{repo.description}</p>
            )}
            
            <div className="flex flex-wrap gap-2">
              {repo.language && (
                <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs">
                  {repo.language}
                </span>
              )}
              <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-xs">
                Atualizado: {new Date(repo.updated_at).toLocaleDateString('pt-BR')}
              </span>
              {repo.visibility && (
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                  {repo.visibility}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a 
          href="https://github.com/andrelgsilva?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          Ver todos os repositórios
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}