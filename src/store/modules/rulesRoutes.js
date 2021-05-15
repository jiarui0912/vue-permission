// 规则的路由
//参数1：前端路由数据，参数2：后台获取的路由数据

export function rulesRoutes (front, back) {
  let menuList = [];
  front.forEach(ele1 => {
    back.forEach(ele2 => {
      if (ele1.meta.name === ele2.name) {
        if (ele2.children && ele2.children.length > 0) {
          ele1.children = rulesRoutes(ele1.children, ele2.children);
        }
        menuList.push(ele1)
      }
    })
  });
  return menuList;
}
