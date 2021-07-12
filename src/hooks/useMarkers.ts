import useSWR from "swr";

function useFetchActiveMarkers() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/markers`
  );

  return {
    coordinates: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useFetchActiveMarkers };
