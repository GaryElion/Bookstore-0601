const apidomain = 'http://localhost:8080'

//新增角色權限
function CreatePermisson(roleId, functionId) {
    var data = new FormData()
    
    data.append('RoleId', roleId)
    data.append('FunctionId', functionId)

    return fetch(apidomain + '/permisson/1', {//這裡要按照api的網址
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

//取得該角色權限
function GetPermisson(permisson) {
    const token = getCookie('token')
    return fetch(apidomain + '/permisson/1/' + permisson, {//這裡要按照api的網址
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
//刪除角色該權限
function DeletePermisson(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/permisson/1/' + id, {
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
