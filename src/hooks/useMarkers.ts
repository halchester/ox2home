import useSWR from "swr";

function useFetchActiveMarkers() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/markers`
  );

  return {
    coordinates: data?.data,
    isLoading: !error && !data?.data,
    isError: error,
  };
}

export { useFetchActiveMarkers };
