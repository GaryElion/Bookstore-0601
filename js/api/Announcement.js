//新增公告
function CreateAnnouncement(title,content) {
    var data = new FormData()
    data.append('Title', title),
    data.append('Content', content)
    return fetch(apidomain + '/announcement', {//這裡要按照api的網址
        method: 'POST',
        headers: {
        },
        body: data,
    })
        .then(res => res.json())
        .then(res => {
            /*完成後接收傳回來的資料*/
        })
        .catch(e => {
            console.error('Error:', error)
        })

}
//取得所有公告
function GetAllAnnouncement() {
    const token = getCookie('token')//clien端裡面的cookie抓取token的值
    console.log(token)
    return fetch(apidomain + '/announcement', {//這裡要按照api的網址
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
GetAllAnnouncement()
//進入公告頁面
function GoToAnnouncement() {
    const token = getCookie('token')//clien端裡面的cookie抓取token的值
    console.log(token)
    return fetch(apidomain + '/announcement/1', {//這裡要按照api的網址
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
//更新公告
function UpdateAnnouncement($title) {
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
    fetch(apidomain + '/announcement/1', {
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
//刪除公告
function DeleteAnnouncement(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/announcement/1/' + id, {
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