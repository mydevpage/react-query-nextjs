import { useQuery } from '@tanstack/react-query';

export default function useTodos() {
    return useQuery({
		queryKey: ['todos'],
		queryFn: async () => {
			const res = await fetch('/api/todos');
			if (!res.ok) throw new Error('Failed to fetch');
			return res.json();
		},
    }
)}