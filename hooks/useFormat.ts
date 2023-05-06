export const useFormat = () => {
  const dateFormat = (timeStamp: number) => {
    // タイムスタンプを時間に変換します
    const date = new Date(timeStamp);
    const year = String(date.getFullYear()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const formatted = `${year}年${month}月${day}日 ${hours}時${minutes}分${seconds}秒`;
    return formatted;
  }
  return {dateFormat};
}
