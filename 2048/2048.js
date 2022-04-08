// ==UserScript==
// @name         2048帖子高亮图片预览
// @description  帖子高亮，列表页面直接预览帖子内图片
// @version      0.0.8
// @author       bluebabes
// @namespace    hjd2048.com
// @match        https://hjd2048.com/*
// @icon         data:image/png;base64,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
// @updateURL    https://raw.githubusercontent.com/bluebabes/greasyfork-userscript/main/2048/2048.js
// @downloadURL  https://raw.githubusercontent.com/bluebabes/greasyfork-userscript/main/2048/2048.js
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @require      https://raw.githubusercontent.com/bluebabes/greasyfork-userscript/main/utils/utils.js?t=20220407
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_openInTab
// @grant        GM_unregisterMenuCommand
// @grant        GM_registerMenuCommand
// @license 	   GNU GPLv3
// ==/UserScript==

(function () {
  "use strict";
  $("head").append($(`<style></style>`));

  // debug
  var debug = true;
  var maxImgCount = 8; // 最多显示图片数量

  // 增加菜单
  var menu_ALL = [["menu_disable", "✅ 已启用", "❌ 已禁用", []]];
  var menu_ID = [];
  for (let i = 0; i < menu_ALL.length; i++) {
    // 如果读取到的值为 null 就写入默认值
    if (GM_getValue(menu_ALL[i][0]) == null) {
      GM_setValue(menu_ALL[i][0], menu_ALL[i][3]);
    }
  }
  // 注册脚本菜单
  if (menu_ID.length != []) {
    for (let i = 0; i < menu_ID.length; i++) {
      GM_unregisterMenuCommand(menu_ID[i]);
    }
  }
  for (let i = 0; i < menu_ALL.length; i++) {
    // 循环注册脚本菜单
    menu_ALL[i][3] = GM_getValue(menu_ALL[i][0]);
    if (menu_ALL[i][0] === "menu_disable") {
      // 当前网站是否已存在禁用列表中
      if (menu_disable("check")) {
        // 已禁用
        menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][2]}`, function () {
          menu_disable("del");
        });
        return;
      } else {
        // 开启状态
        menu_ID[i] = GM_registerMenuCommand(`${menu_ALL[i][1]}`, function () {
          menu_disable("add");
        });
      }
    }
  }
  menu_ID[menu_ID.length] = GM_registerMenuCommand(
    "💬 反馈 & 建议",
    function () {
      window.GM_openInTab(
        "https://github.com/bluebabes/greasyfork-userscript/issues",
        {
          active: true,
          insert: true,
          setParent: true,
        }
      );
    }
  );

  // 返回菜单值
  function menu_value(menuName) {
    for (let menu of menu_ALL) {
      if (menu[0] == menuName) {
        return menu[3];
      }
    }
  }

  // 启用/禁用 (当前网站)
  function menu_disable(type) {
    let href = document.location.href;
    switch (type) {
      case "check":
        if (disabled()) return true;
        return false;
        break;
      case "add":
        addDisabled();
        break;
      case "del":
        delDisabled();
        break;
    }

    function disabled() {
      // 存在返回真，不存在返回假
      let websiteList = menu_value("menu_disable"); // 读取网站列表
      if (websiteList.indexOf(href) === -1) return false; // 不存在返回假
      return true;
    }

    function addDisabled() {
      if (disabled()) return;
      let websiteList = menu_value("menu_disable"); // 读取网站列表
      websiteList.push(href); // 追加网站域名
      GM_setValue("menu_disable", websiteList); // 写入配置
      location.reload(); // 刷新网页
    }

    function delDisabled() {
      if (!disabled()) return;
      let websiteList = menu_value("menu_disable"), // 读取网站列表
        index = websiteList.indexOf(href);
      websiteList.splice(index, 1); // 删除网站域名
      GM_setValue("menu_disable", websiteList); // 写入配置
      location.reload(); // 刷新网页
    }
  }

  // 2048 判断
  var href = document.location.href;
  if (href.indexOf("/2048/") === -1) {
    return;
  }

  // 检查是否是列表
  function isUrlList() {
    var reg = /fid-[\d]+.html/g;
    var res = href.match(reg);
    return res && href.match(reg).length > 0;
  }
  // 检查是否是帖子
  function isUrlDetail() {
    return !isUrlList;
  }
  // 过滤
  function filterDetailUrl(title) {
    if (!title) {
      return true;
    }
    var isBlack = false;
    var filters = [
      "來訪者必看的內容",
      "請各位更換新的文宣",
      "外站图床推荐",
      "开放主题",
      "同城兼职少妇",
    ];
    filters.forEach((element) => {
      if (title.indexOf(element) > 0) {
        isBlack = true;
      }
    });
    return isBlack;
  }

  // 2048 列表逻辑处理
  if (isUrlList() || href.indexOf("search.php") >= 0) {
    // other
    document.querySelector(".TOP_PD") &&
    document.querySelector(".TOP_PD").remove();
    document.querySelector(".TOP_PD2") &&
    document.querySelector(".TOP_PD2").remove();

    let origin = document.location.origin;
    // 列表循环
    $(".tr3").each(function () {
      var that = $(this);
      var thatA = that.find("a").first();
      var url = origin + "/2048/" + thatA.attr("href");

      var thattd = that.find("td:eq(1)");
      if (href.indexOf("search.php") >= 0) {
        thattd = that.find("th:eq(0)");
      }

      // a的数量异常删除
      if (thattd.find("a").length > 5) {
        that.remove();
      }

      // 处理图片
      var title = thattd.find("a").first().text();
      var isBlacked = filterDetailUrl(title);
      if (!isBlacked && !menu_disable("check")) {
        utils.Log(debug, ["处理内部帖子图片:", title, url]);
        GM_xmlhttpRequest({
          method: "GET",
          url: url,
          headers: {
            "User-agent": window.navigator.userAgent,
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            cookie: document.cookie,
            referer: href,
          },
          onload: function (result) {
            var doc = result.responseText;
            var imgs = $(doc).find(".tpc_content img"); // $(doc).find(".att_img > img");

            // utils.Log(debug, ["获取图片:", imgs.length]);

            for (let i = 0; i < imgs.length; i++) {
              // 最多图片
              if (i >= maxImgCount) {
                break;
              }
              const element = imgs[i];
              if (i == 0) {
                thattd.append("<br />");
              }
              var src = element.getAttribute("src");
              src = utils.ImgSrcComplate(src);

              thattd.append(
                "<img object-fit='contain' style='width:200px;' src='" +
                  src +
                  "' />"
              );
            }
          },
        });
      }
    });

    // 高亮回复数大于xx数的帖子
    function highlight() {
      var highlightCount = 5;
      var tr3s = document.querySelectorAll(".tr3");
      for (var i = 0; i < tr3s.length; i++) {
        var element = tr3s[i];
        var td = element.querySelectorAll("td");

        // 高亮
        if (td[3]) {
          if (td[3].textContent * 1 > highlightCount) {
            td[1].style.backgroundColor = "#baccd9";
            td[3].style.backgroundColor = "#baccd9";
          }
        }
      }
    }
  } else {
    document.querySelector("#footer") &&
    document.querySelector("#footer").remove();
  }
})();
