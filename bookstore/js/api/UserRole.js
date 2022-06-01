const apidomain = 'http://localhost:8080'

//取得使用者角色
function GetUserRole(role) {
    const token = getCookie('token')
    return fetch(apidomain + '/userrole/' + role, {//這裡要按照api的網址
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

//新增後台角色

function CreateBackstageRole(roleId) {
    var data = new FormData()

    data.append('RoleId', roleId)
    return fetch(apidomain + '/userrole', {//這裡要按照api的網址
        method: 'POST',
        headers: {
            'Authorization': token
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
            console.error('Error:', e)
        })

}
//刪除角色
function DeleteUserRole(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/userrole/1/' + id, {
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