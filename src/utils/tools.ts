/**
 *
 * 获取图片url
 * @param {string} name - 图片名称（带后缀）
 * @returns
 */
export const getImageUrl = (name: string) => {
    return new URL(`../assets/img/${name}`, import.meta.url).href
}