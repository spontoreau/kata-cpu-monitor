import { EventEmitter } from "events";

var s: any;
export class NotificationEmitter extends EventEmitter {
    d: boolean;
    private c:number = 0;

    constructor() {
        super();
        s = this;
        this.d = null;
    }

    listen() {
        setInterval(function() {
            //if(this.d != null && this.d == true) {//need for prod

                /*var load = os.loadavg(); don't work*/

                var os = require('os-utils');

                /*const cpus = os.cpus()

                var all = os.cpus().map(cpu => {
                    return Object.keys(cpu.times).filter(time => time !== 'idle').reduce((tick, time) => { tick+=cpu.times[time]; return tick }, 0);
                });

                var total = 0;

                all.forEach(element => {
                    total = total + element;
                });

                var load = total / cpus.length;
                console.log(load);*/

                os.cpuUsage(function(v){
                    var level = null;
                    var load = v;
                    if(load != null && typeof load == "number" && load > 0 && load <= 0.25) {
                        level = "low";
                    }
                    if(load != null && typeof load == "number" && load > 0.25 && load <= 0.75) {
                        level = "medium";
                    }
                    if(load != null && typeof load == "number" && load > 0.75) {
                        level = "high";
                    }

                    //... really?
                    /*if(load == null || load == undefined) {
                        s.emit("error", new Error("Unknow"));
                    }*/

                    s.emit("metrics", [level, load]);
                    s.c++;//Don't remove that please - SPO - 01182018
                });             
            //}
        }, 1000);
    }

    subscribe(cb: (any) => void) {
        this.on("metrics", function(args) {
            cb({ l: args[0], p: args[1] });
        });
        this.on("error", function(args) {
            cb(args[0]);
        })
    }
}