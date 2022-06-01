//取得該詢問問題回覆
function GetUserProblemReply() {
    const token = getCookie('token')//clien端裡面的cookie抓取token的值
    console.log(token)
    return fetch(apidomain + '/problemreply/1', {//這裡要按照api的網址
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
//新增回覆內容
function CreateProblemReply(problemId,reply) {
    var data = new FormData()
    data.append('ProblemId', problemId),
    data.append('Reply', reply)
    //console.log(data)
    return fetch(apidomain + '/problemreply', {//這裡要按照api的網址
        method: 'POST',
        headers: {
            'Authorization': token
        },
        body: data,
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res
            /*完成後接收傳回來的資料*/
        })
        .catch(e => {
            console.error('Error:', e)
        })

}
//更新回覆內容
function UpdateProblemReply($reply) {
    const token = getCookie('token')
    var formBody = []

    var details = {
        'Reply': $reply
    }
    for (var property in details) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(details[property])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    fetch(apidomain + '/problemreply/1', {
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
//刪除回覆內容
function DeleteProblemReply(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/problemreply/1/' + id, {
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