import { useEffect, useState } from "react";
import { profile } from "../data/profile";

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
};

type State = {
  repos: GithubRepo[];
  loading: boolean;
  error: string | null;
};

export function useGithubRepos() {
  const [state, setState] = useState<State>({
    repos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=12`,
        );

        if (!res.ok) {
          throw new Error(`GitHub respondeu ${res.status}`);
        }

        const data: GithubRepo[] = await res.json();

        if (!cancelled) {
          const publicRepos = data
            .filter((repo) => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count);
          setState({ repos: publicRepos, loading: false, error: null });
        }
      } catch (err) {
        if (!cancelled) {
          setState({
            repos: [],
            loading: false,
            error:
              err instanceof Error
                ? err.message
                : "Não foi possível carregar os repositórios.",
          });
        }
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
