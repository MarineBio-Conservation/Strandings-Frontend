import { atom, selector } from "recoil";

export const strandingsAtom = atom({
  key: "Strandings",
  default: [],
});

export const mapBoundsAtom = atom({
  key: "mapBounds",
  default: null,
});

export const filteredStrandings = selector({
  key: "filteredStrandings",
  get: ({ get }) => {
    const strandings = get(strandingsAtom);
    const bounds = get(mapBoundsAtom);
    return strandings.filter((event) => {
      return (
        event.position.lat < bounds.latMax &&
        event.position.lat > bounds.latMin &&
        event.position.lng < bounds.lngMax &&
        event.position.lng > bounds.lngMin
      );
    });
  },
});
