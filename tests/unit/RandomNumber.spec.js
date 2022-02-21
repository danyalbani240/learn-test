import RandomNumber from "@/components/RandomNumber";
import { mount } from "@vue/test-utils";
describe("RandomNumber", () => {
    test("by default value is zero", () => {
        const wrapper = mount(RandomNumber);
        expect(wrapper.html()).toContain("<span>0</span>");
    });
    test("by default button clicked value is between 1 and 10", async () => {
        const wrapper = mount(RandomNumber);

        await wrapper.find("button").trigger("click");
        const randomNumber = +wrapper.find("span").text();
        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(10);
    });
    test("by default button clicked and props are passed value is between min and max", async () => {
        const wrapper = mount(RandomNumber);
        await wrapper.setProps({
            min: 200,
            max: 300,
        });
        await wrapper.find("button").trigger("click");

        const randomNumber = +wrapper.find("span").text();
        expect(randomNumber).toBeGreaterThanOrEqual(200);
        expect(randomNumber).toBeLessThanOrEqual(300);
    });
});
