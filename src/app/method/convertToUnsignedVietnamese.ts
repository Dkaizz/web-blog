export default  function convertToUnsignedVietnamese(str:string) {
  const withAccents = 'àáảãạăắằẵặẳâầấậẫẩđèéẻẽẹêềếệểễìíỉĩịòóỏõọôồốộổỗơờớợởỡùúủũụưừứựửữỳýỷỹỵ';
  const withoutAccents = 'aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyy';

  const convertedStr = str
    .split('')
    .map((char) => {
      const index = withAccents.indexOf(char);
      return index !== -1 ? withoutAccents[index] : char;
    })
    .join('');

  return convertedStr;
}
