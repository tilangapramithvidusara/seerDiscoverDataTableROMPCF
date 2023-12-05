

export const removeDuplicates : any = (array: any, removeKey: any) => {
  return array?.reduce((unique: any[], o: any) => {
      if(!unique.some((obj: any) => obj[removeKey] === o[removeKey])) {
        unique.push(o);
      }
      return unique;
    }, []);
}