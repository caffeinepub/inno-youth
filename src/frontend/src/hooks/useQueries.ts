import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactSubmission } from '../backend';

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['submissions', 'all'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetUnreadSubmissions() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactSubmission[]>({
    queryKey: ['submissions', 'unread'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getUnreadSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
