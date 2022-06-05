//新增角色權限
async function createPermisson() {
    var data;
    await CreatePermisson().then(r => data = r);
    
    CreatePermisson()
        .then(r => data = r)
    data = r
    console.log(data);
    //printalldata(data);
}
createPermisson();
//取得該角色權限
async function getPermisson() {
    var data;
    await GetPermisson().then(r => data = r);
    
    GetPermisson()
        .then(r => data = r)
    data = r
    console.log(data);
    //printalldata(data);
}
getPermisson();
//刪除角色該權限
async function deletePermisson() {
    var data;
    await DeletePermisson().then(r => data = r);
    
    DeletePermisson()
        .then(r => data = r)
    data = r
    console.log(data);
    //printalldata(data);
}
deletePermisson();
