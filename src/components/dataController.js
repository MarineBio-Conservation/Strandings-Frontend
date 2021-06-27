import { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { mapBoundsAtom, strandingsAtom } from "../atoms";

/**
 * This component is responsible for fetching stranding
 * events from the API based upon a set of geographical bounds,
 * such as from the map bounds.
 * 
 * TODO: Handle the case that we've hit the limit on the number of results
 * TODO: This may be naturally fixed with a dates bound.
 * @returns null
 */
function DataController() {
  const setStrandings = useSetRecoilState(strandingsAtom);
  const [mapBounds] = useRecoilState(mapBoundsAtom);
  const [maxBounds, setMaxBounds] = useState({
    latMin: 0,
    latMax: 0,
    lngMin: 0,
    lngMax: 0,
  });
  // Create a new cached variable abortController in a useRef() hook
  const abortController = useRef();

  useEffect(() => {
      
    const isLarger = mapBounds === null ||
      mapBounds.latMin < maxBounds.latMin ||
      mapBounds.latMax > maxBounds.latMax ||
      mapBounds.lngMin < maxBounds.lngMin ||
      mapBounds.lngMax > maxBounds.lngMax;

    if (isLarger && mapBounds !== null) {
      setMaxBounds(mapBounds);

      // If there is a pending fetch request with associated AbortController, abort
      if (abortController.current) {
        abortController.current.abort();
      }
      // Assign a new AbortController for the latest fetch to our useRef variable
      abortController.current = new AbortController();
      const { signal } = abortController.current;

      let url = new URL("https://api.marinestrandings.com/events");
      Object.keys(mapBounds).forEach((key) =>
        url.searchParams.append(key, mapBounds[key])
      );
      // console.log(url)
      fetch(url, { signal })
        .then((response) => response.json())
        .then((data) => setStrandings(data ? data : []))
        .catch((error) => console.log(error));
    }
  }, [maxBounds, setStrandings, abortController, mapBounds]);

  return null;
}

export default DataController;
