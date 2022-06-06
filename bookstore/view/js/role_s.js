//取得所有角色 
async function getRole() {
    var data;
    await GetAllRole().then(r => data = r);

    GetAllRole()
        .then(r => data = r)
    //data = r
    console.log(data);
    printalldata(data);
}
getRole();
//新增角色
async function createRole() {
    var data;
    await CreateRole().then(r => data = r);

    //CreateRole().then(r => data = r)
    //data = r
    console.log(data);
    //printalldata(data);

}
createRole();
//更新角色
async function updateRole() {
    var data;
    await UpdateRole().then(r => data = r);

    UpdateRole()
        .then(r => data = r)
    //data = r
    console.log(data);
    //printalldata(data);

}
updateRole();
//刪除角色
async function deleteRole() {
    var data;
    await DeleteRole().then(r => data = r);

    DeleteRole()
        .then(r => data = r)
    //data = r
    console.log(data);
    //printalldata(data);
}
deleteRole();

function printalldata(data) {
    var text = document.getElementById("role");
    //var 接資料變數
    //如果data裡面有data代表資料正確
    if (data.hasOwnProperty('data')) {
        var dataa = data.data;//取出data所有資料
        for (i = 0; i < dataa.length; i++) {
            console.log(dataa[i]);//印出每筆資料內容
            console.log(dataa[i].Name);//取出單一資料
        }
        //text.innerHTML=dataa;
    }
}