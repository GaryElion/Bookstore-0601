//執行
//取得所有公告
async function getAnnoucement() {
    var data;

    await GetAnnoucement().then(r => data = r);
    
    GetAnnoucement()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);

}
getAnnoucement();
//進入公告頁面
async function getByIdAnnoucement() {
    var data;

    await GetByIdAnnoucement().then(r => data = r);
    
    GetByIdAnnoucement()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);

}
getByIdAnnoucement();
//新增公告
async function postAnnoucement() {
    var data;

    await PostAnnoucement().then(r => data = r);
    
    PostAnnoucement()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);

}
postAnnoucement();
//更新公告
async function patchAnnoucement() {
    var data;

    await PATCHAnnoucement().then(r => data = r);
    
    PATCHAnnoucement()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);

}
getAnnoucement();
//刪除公告
async function deleteAnnoucement() {
    var data;

    await DELETEAnnoucement().then(r => data = r);
    
    DELETEAnnoucement()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);

}
getAnnoucement();
//印出每個資料
function printalldata(data){
    //如果data裡面有data代表資料正確
    if(data.hasOwnProperty('data')){
        var dataa = data.data;//取出data所有資料
        for(i = 0 ; i < dataa.length ; i++){
            console.log(dataa[i]);//印出每筆資料內容
            console.log(dataa[i].Name);//取出單一資料
        }
    }
}