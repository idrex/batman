import pathToRegexp from 'path-to-regexp';
export function urlToList(url) {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => `/${urllist.slice(0, index + 1).join('/')}`);
}

/**
 * 
 * @param {获取meun} props 
 */
export const geOpentMenuKeys = props => {
  const {
    location: { pathname }
  } = props;
  let openKeys = urlToList(pathname)
  return openKeys.slice(0,openKeys.length-1)
}

export const getSelectedMenuKeys = props => {
  const {
    location: { pathname }
  } = props;
  return [urlToList(pathname).pop()]
}