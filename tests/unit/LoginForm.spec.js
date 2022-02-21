import LoginForm from "@/components/LoginForm";
import { mount } from "@vue/test-utils";
describe("LoginForm", () => {
    it("emits an event with a user data payload ", async () => {
        const wrapper = mount(LoginForm);
        const input = wrapper.find("input");

        input.setValue("Danyal Bani");
        wrapper.trigger("submit");

        const submittedCall = wrapper.emitted("formsubmit");
        expect(submittedCall).toHaveLength(1);
    });
});
