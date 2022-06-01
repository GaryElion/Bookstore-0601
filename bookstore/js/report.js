
/*問題回報 */
document.getElementById('reply').addEventListener('click', replychange);
document.getElementsByClassName('return').addEventListener('click',back);
function replychange() {
    const container = document.getElementById('replycontainer');
    var div = document.createElement('textarea');
    this.id = "sendreply";
    container.insertBefore(div, this);
    document.getElementById('sendreply').removeEventListener('click', replychange);
    document.getElementById('sendreply').addEventListener('click', sendreply);
}

function sendreply() {
    console.log('succece');
}

function back(){
    window.history.back();
}