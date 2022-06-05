//新增問題回報
async function createProblemlist() {
    var data;
    await CreateProblemlist().then(r => data = r);
    
    CreateProblemlist()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);
}
createProblemlist();
//取得使用者問題回報
function GetUserProblemlist() {
    const token = getCookie('token')//clien端裡面的cookie抓取token的值
    console.log(token)
    return fetch(apidomain + '/problemlistu/p_1', {//這裡要按照api的網址
        method: 'GET',
        headers:{
            'Authorization': token
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res
        })
        .catch(e => {
            console.error('Error:', e)
        })
}
//管理員查看問題回報
function GetAllProblemlist() {
    const token = getCookie('token')//clien端裡面的cookie抓取token的值
    console.log(token)
    return fetch(apidomain + '/problemlistu/p_1', {//這裡要按照api的網址
        method: 'GET',
        headers:{
            'Authorization': token
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res
        })
        .catch(e => {
            console.error('Error:', e)
        })
}
//更新問題回報
function UpdateProblemlist($title) {
    const token = getCookie('token')
    var formBody = []

    var details = {
        'Title': $title
    }
    for (var property in details) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(details[property])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    fetch(apidomain + '/problemlist/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': token,
        },
        body: formBody
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(e => {
            console.error('Error:', e)
        })

}
//刪除問題回報
function DeleteProblemlist(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/problemlist/1/' + id, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        },
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(e => {
            console.error('Error:', e)
        })
}