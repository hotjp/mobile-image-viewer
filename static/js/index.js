const page ={}
page.page = Number(location.pathname.split('/')[2]) || 1
page.pageSize = Number(location.pathname.split('/')[1]) || 20
function prev() {
  location.href = location.origin+'/'+page.pageSize+'/'+(page.page-1)
}
function next() {
  location.href = location.origin+'/'+page.pageSize+'/'+(page.page+1)
}