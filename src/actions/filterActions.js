export const FRONT_FILTER = "FRONT_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const frontFilter = bounds => ({
  type: FRONT_FILTER,
  bounds
});

export const clearFilter = () => ({
  type: CLEAR_FILTER
});
