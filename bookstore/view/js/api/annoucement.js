const apidomain = 'http://localhost:8080'
//取得所有公告
function GetAnnoucement() {
    var token = getCookie('token');
    return fetch(apidomain + '/announcement', {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
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

//進入公告頁面
function GetByIdAnnoucement(id) {
    var token = getCookie('token');
    return fetch(apidomain + '/announcement/' + id, {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
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

//新增公告
function PostAnnoucement(title, content) {
    const token = getCookie('token');
    var data = new FormData();
    data.append('Title', title);
    data.append('Content', content);
    return fetch(apidomain + '/announcement', {
        method: 'POST',
        headers: {
            'Authorization': token,
        },
        body: data,
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

//更新公告
function PATCHAnnoucement(id, data) {
    const token = getCookie('token')
    var formBody = []
    var details = data
    for (var property in details) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(details[property])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    return fetch(apidomain + '/announcement/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': token,
        },
        body: formBody.join('&')
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.hasOwnProperty('info')) return true;
            return false;
        })
        .catch(e => {
            console.error('Error:', e)
        })
}

//刪除公告
function DELETEAnnoucement(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/announcement/' + id, {
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