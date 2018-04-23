import { NotificationEmitter } from "./notificationEmitter";

var n = new NotificationEmitter();
n.d = true;//disable
n.subscribe(function(notif) {
    console.log(notif);//{ l: null, p: 0 } on windows, stupid nodejs stuff... 
});
n.listen();