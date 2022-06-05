//取得使用者角色 
async function getUserRole() {
    var data;
    await GetUserRole().then(r => data = r);
    
    GetUserRole()
        .then(r => data = r)
    data = r
    console.log(data);
    //printalldata(data);
}
getUserRole();
//新增後台角色
async function createBackstageRole() {
    var data;
    await CreateBackstageRole().then(r => data = r);
    
    CreateBackstageRole()
        .then(r => data = r)
    data = r
    console.log(data);
    //printalldata(data);

}
createBackstageRole();

//刪除角色
async function deleteUserRole() {
    var data;
    await DeleteUserRole().then(r => data = r);
    
    DeleteUserRole()
        .then(r => data = r)
    data = r
    console.log(data);
    //printalldata(data);
}
deleteUserRole();

function printalldata(data){
    var text = document.getElementById("role");
    //var 接資料變數
    //如果data裡面有data代表資料正確
    if(data.hasOwnProperty('data')){
        var dataa = data.data;//取出data所有資料
        for(i = 0 ; i < dataa.length ; i++){
            console.log(dataa[i]);//印出每筆資料內容
            console.log(dataa[i].Name);//取出單一資料
        }
        //text.innerHTML=dataa;
    }

}