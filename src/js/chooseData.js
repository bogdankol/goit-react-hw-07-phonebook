
export const chooseData = (arrayBase, arrayLocal) => {
    if (arrayLocal && arrayLocal.length > 0) {
      return arrayLocal;
    }
    return arrayBase;
  };