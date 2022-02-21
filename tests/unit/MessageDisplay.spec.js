import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/service/axios.js";
jest.mock("@/service/axios.js");
//testing if the call was successfull display the message
//testing if the call was failed display the error
describe("MessageDisplay", () => {
    it("if service call was successfull display the message", async () => {
        const mockMessage = "hello from danyal";
        getMessage.mockResolvedValueOnce({ text: mockMessage });
        const wrapper = mount(MessageDisplay);
    });
    it("if message call failed display the error", async () => {
        const wrapper = mount(MessageDisplay);
    });
});
