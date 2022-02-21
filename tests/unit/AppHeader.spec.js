import AppHeader from "@/components/AppHeader";
import { mount } from "@vue/test-utils";
describe("AppHeader", () => {
    test("if user is not loged in do not hsow log out button", async () => {
        const wrapper = mount(AppHeader);
        await wrapper.setData({ isLogedin: false });

        expect(wrapper.find("button").isVisible()).toBe(false);
    });
    test("if user is  loged in show log out button", async () => {
        const wrapper = mount(AppHeader);
        await wrapper.setData({ isLogedin: true });
        expect(wrapper.find("button").isVisible()).toBe(true);
    });
});
