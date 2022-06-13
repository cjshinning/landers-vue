/**
 * 公用方法模块
 */

export default {
  /**
   * @param url 要加载的js链接，string or Array
   * @returns {Promise<*>}
   */
  async loadScript(url) {
    let ret;
    if (typeof url === "string") {
      ret = await new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);
        script.onload = function () {
          resolve();
        }
        script.onerror = function () {
          reject(`加载${url}失败`);
        }
      })
    } else if (Object.prototype.toString.call(url) === "[object Array]") {
      for (let v of url) {
        ret = await new Promise((resolve, reject) => {
          let script = document.createElement("script");
          script.src = v;
          document.body.appendChild(script);
          script.onload = function () {
            resolve();
          }
          script.onerror = function () {
            reject(`加载${v}失败`);
          }
        })
      }
    } else {
      ret = await new Promise(() => {
        throw new Error("Function loadScript 的参数必须为数组或者字符串");
      });

    }
    return ret;
  },
}