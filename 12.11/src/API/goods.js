import http from "@/untils/http"
/**获取商品列表信息 */
export const getGoodsList = () => {
	return http.request("/goods").then((res) => res.data)
}

/**获取删除商品信息 */
export const delGood = (query) => {
	return http.request("/goods", query, "delete").then((res) => res.data)
}

/**获取编辑商品信息 */
export const editGoods = (id) => {
	return http.request("/goods", id, "put").then((res) => res.data)
}

/**添加商品数据 */
export const SetShopType = (data) => {
	return http.request("/goods", data, "post").then((res) => res.data)
}

/**商品分类数据 */
export const GetShopType = () => {
	return http.request("/categories").then((res) => res.data)
}

/**选择商品分类 */
export const GetShopParams = () => {
	return http.request("/params").then((res) => res.data)
}

/**选添加动态参数或者静态属性 */
export const addShopParams = (params) => {
	return http.request("/categories", params, "post").then((res) => res.data)
}

/**选添加删除参数 */
export const delShopParams = (params) => {
	return http.request("/categories", params, "delete").then((res) => res.data)
}

/**修改动态参数 */
export const editShopParams = (params) => {
	return http.request("/categories", params, "put").then((res) => res.data)
}
