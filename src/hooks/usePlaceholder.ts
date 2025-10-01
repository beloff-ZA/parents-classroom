import { useState } from "react";

export const usePlaceholder = () => {
  const [state, setState] = useState(null);

  return { state, setState };
};
