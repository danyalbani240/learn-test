import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/service/axios.js";
import flushPromises from "flush-promises";
jest.mock("@/service/axios.js");
//testing if the call was successfull display the message
//testing if the call was failed display the error
describe("MessageDisplay", () => {
    it("if service call was successfull display the message", async () => {
        const mockMessage = "hello from danyal";
        getMessage.mockResolvedValueOnce({ text: mockMessage });
        const wrapper = mount(MessageDisplay);
        await flushPromises(); //get sure all of our promisses are resolved
        //checking if call is happend
        expect(getMessage).toHaveBeenCalledTimes(1);
        const message = wrapper.find('[data-testid="message"]');
        expect(message).toEqual(mockMessage);
    });
    it("if message call failed display the error", async () => {
        const wrapper = mount(MessageDisplay);
    });
});
