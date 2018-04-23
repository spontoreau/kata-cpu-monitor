import { NotificationEmitter } from "../src/notificationEmitter";

describe("", () => {
    it("foo", () => {
        var notificationEmitter = new NotificationEmitter();
        expect(notificationEmitter.d).toBeFalsy();
    })
});