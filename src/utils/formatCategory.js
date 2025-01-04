/**
 * カテゴリ名をフォーマットする
 * - 絵文字とスペースを削除
 * - 小文字に変換
 *
 * @param {string} category - 元のカテゴリ名
 * @returns {string} フォーマット済みカテゴリ名
 */
const formatCategory = (category) => {
  return category.replace(/^\p{Emoji_Presentation}\s+/u, "").toLowerCase();
};

export default formatCategory
