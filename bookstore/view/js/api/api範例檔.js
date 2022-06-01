const apidomain = 'http://localhost:8080'
//POST
function Register(account, password, name, email) {
    var data = new FormData()
    /*修改區域把要傳的參數放進來
    data.append('Account', account)
    data.append('Password', password)
    data.append('Name', name)
    data.append('Email', email)*/
    return fetch(apidomain + '/user', {//這裡要按照api的網址
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


//GET
function CheckAccount(account) {
    const token = getCookie('token')
    return fetch(apidomain + '/user/check/' + account, {//這裡要按照api的網址
        method: 'GET',
    })
        .then(res => res.json())
        .then(res => {

        })
        .catch(e => {
            console.error('Error:', error)
        })
}

//PATCH
function UpdateAddress($addr) {
    const token = getCookie('token')
    var formBody = []
    /*資料傳進來要弄成物件
    PATCH 按照這個格式
    var details = {
        'Address': $addr
    }*/
    for (var property in details) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(details[property])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    fetch(apidomain + '/user/address', {
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

//DELETE
function DeleteTag(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/tag/' + id, {
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

//

//取得Cookie
function getCookie(cookiename) {
    let name = cookiename + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//設置
function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + cvalue + "; " + expires
}

//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}

//測試
function GetAllProduct() {
    var token = getCookie('token');
    return fetch(apidomain + '/product', {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
        .then(res => res.json())
        .then(res => {
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}



