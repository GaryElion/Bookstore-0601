

//async (使用api的函式要有這個字眼，代表裡面的執行要等待awit結束才能執行下一行)
async function getproduct() {
   var data;
    await GetAllProduct().then(r => data = r);
    //等待await
    //GetAllProduct()(你在api範例檔的定義函式)
    //執行完後.then( r => data = r)
    //then下一步
    //r接收到的資料
    //data = r 用data接收資料
   
    //看到印出的資料 console.log(data);
    //在網頁按f12
    console.log(data);
    printalldata(data);
  
}
//上面是定義完成但還沒執行
//直行接完的api
getproduct();

//資料格式是

/*
data
-----data
---------0
---------1
---------2
下面是印出每個資料
 */


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

