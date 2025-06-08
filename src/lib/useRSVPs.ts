import { useQuery } from "@tanstack/react-query"
import { Reception } from "reception/types/supabaseAlias"
import createComponentClient from "./supabaseClient"

async function getRSVPs(supabase: ReturnType<typeof createComponentClient>) {
  const { data, error } = await supabase.from("reception").select("*")
  if (error) {
    throw error
  }
  return data
}

export function useRSVPs() {
  const supabase = createComponentClient()

  const {
    data: rsvps,
    error,
    isPending,
    refetch,
  } = useQuery<Reception[] | null, Error>({
    queryKey: ["rsvps"],
    queryFn: async () => {
      return await getRSVPs(supabase)
    },
  })

  return {
    rsvps: rsvps ?? null,
    error,
    isLoadingRSVPs: isPending,
    refetchRSVPs: refetch,
  }
}
