/*
 * @Author: Vincent Yang
 * @Date: 2024-05-25 19:00:59
 * @LastEditors: Vincent Yang
 * @LastEditTime: 2024-05-25 19:28:08
 * @FilePath: /chagee/chagee.js
 * @Telegram: https://t.me/missuo
 * @GitHub: https://github.com/missuo
 * 
 * Copyright © 2024 by Vincent, All Rights Reserved. 
 */

/*
[rewrite_local]
# > Chagee Order No
^https?:\/\/webapi2\.qmai\.cn\/web\/catering2\-apiserver\/v3\/order\/list\/ignore\-count url script-response-body https://raw.githubusercontent.com/missuo/chagee/main/chagee.js
[mitm] 
hostname = webapi2.qmai.cn
*/

var objc = JSON.parse($response.body);

let randomNo = Math.floor(Math.random() * 20) + 1;

let latestOrderNo = objc.data.data[0].orderBaseInfo.storeOrderNo;

let prefix = latestOrderNo.slice(0, -3);

let lastThreeDigits = latestOrderNo.slice(-3);

let newThreeDigits = parseInt(lastThreeDigits) + randomNo;

newThreeDigits = newThreeDigits.toString().slice(-3);

let newOrderNo = prefix + newThreeDigits;

objc.data.data[0].orderBaseInfo.storeOrderNo = newOrderNo;

let body = JSON.stringify(objc)
$done({body});