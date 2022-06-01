const apidomain = 'http://localhost:8080'

//取得所有功能
function GetAllFunction(fun) {
    const token = getCookie('token')
    return fetch(apidomain + '/function/' + fun, {//這裡要按照api的網址
        method: 'GET',
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res
        })
        .catch(e => {
            console.error('Error:', error)
        })
}
//新增功能
function CreateFunction(functionName) {
    var data = new FormData()

    data.append('FunctionName', functionName)

    return fetch(apidomain + '/function', {//這裡要按照api的網址
        method: 'POST',
        headers: {
        },
        body: data,
    })
        .then(res => res.json())
        .then(res => {
            /*完成後接收傳回來的資料*/
            console.log(res);
            return res

        })
        .catch(e => {
            console.error('Error:', error)
        })

}
//更新功能名稱
function UpdateFunctionName($fun) {
    const token = getCookie('token')
    var formBody = []

    var details = {
        'FunctionName': $fun
    }
    for (var property in details) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(details[property])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    fetch(apidomain + '/function/1', {
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
//刪除功能
function DeleteFunction(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/function/1/' + id, {
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
            console.error('Error:', error)
        })
}