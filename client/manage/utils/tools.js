/**
 * @description 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 * @param  {function} func        传入函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，调用触发于开始边界而不是结束边界
 * @return {function}             返回客户调用函数
 */
export function debounce(func, wait, immediate) {
  let timeout;
  let args;
  let context;
  let timestamp;
  let result;
  const later = function () {
    // 据上一次触发时间间隔
    const last = Date.now() - timestamp;
    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}

export function getRouter(routerData, matchRouter) {
  routerData.map((item,index)=>{
    if (item.routes&&item.routes.length>0) {
      getRouter(item.routes,matchRouter)
    } else {
      matchRouter.push({
        path:item.path,
        redirect:item.redirect||'',
        component:item.component||'',
        exact:item.exact||'',
      })
    }
  })
}
export function dataUrlToBlob (dataUrl) {
  let arr = dataUrl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {type: mime})
}
/**
 * @desc 设置菜单模块权限
 * @num 小于15的数字
 * @return object 。
 */
export function authOperation(num = 0) {
  let binaryArray = [];
  let dividend = num;
  const opt = {
    add: false, // 增加
    delete: false, // 删除
    updata: false, // 修改
    read: false, // 查看
  };
  if (num > 15) {
    return opt;
  }
  // 转换成二进制
  for (;dividend !== 0;) {
    if (dividend / 2 >= 1) {
      binaryArray.unshift(dividend % 2);
      dividend = parseInt(dividend / 2);
    } else {
      binaryArray.unshift(1);
      break;
    }
  }
  // 转换成二进制后补全4位
  switch (binaryArray.length) {
    case 1:
      binaryArray = [0, 0, 0].concat(binaryArray);
      break;
    case 2:
      binaryArray = [0, 0].concat(binaryArray);
      break;
    case 3:
      binaryArray = [0].concat(binaryArray);
      break;
    default:
  }

  if (binaryArray[0] === 1) {
    opt.read = true;
  }
  if (binaryArray[1] === 1) {
    opt.updata = true;
  }
  if (binaryArray[2] === 1) {
    opt.delete = true;
  }
  if (binaryArray[3] === 1) {
    opt.add = true;
  }
  return opt;
}
export function formatter(data) {
  return data
    .reduce((pre, item) => {
      pre.push(item);
      return pre;
    }, [])
    .filter(item => item);
}

export function getMenuList(data,newData){
  data.map(item=>{
    if(item.children&&item.children.length>0){
      getMenuList(item.children,newData)
    }else{
      newData.push({...item})
    }
  })
  return [...newData]
}

export function setMenuAuth(menu,serverMenu,newData){
  let temp = []
  menu.map(item=>{
    if(item.children && item.children.length>0){
      newData = setMenuAuth(item.children,serverMenu,newData)
    }else{
      const findMenu = serverMenu.find(i=>i.path === item.path)
      if(findMenu) {
        item.auth = findMenu.auth
      }else{
        item.auth = 0
      }
    }
  })
  return temp
}
/**
 * 
 * @param {*} source  []
 * @param {*} match  [{_id:''}]
 */
export function mergeSameArray(source,match){
  source = JSON.parse(JSON.stringify(source))
  source.map(item=>{
    if(item.children){
      item.children = mergeSameArray(item.children,match)
      if(item.children && item.children.length === 0){
        source = source.filter(childrenItem=>childrenItem._id !== item._id)
      }
    }else{
      let find = match.find(matchItem=>matchItem._id===item._id)
      if(!find)
        source = source.filter(i=>i._id !== item._id)
    }
  })
  return source
}