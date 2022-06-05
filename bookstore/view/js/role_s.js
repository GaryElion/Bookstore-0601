//使用GetAllRole 
async function getRole() {
    var data;
    await GetAllRole().then(r => data = r);
    
    GetAllRole()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);
}
getRole();
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
        text.innerHTML=dataa;
    }

}