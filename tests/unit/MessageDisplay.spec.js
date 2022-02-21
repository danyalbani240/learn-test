import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/service/axios.js";
import flushPromises from "flush-promises";

//creating mock
jest.mock("@/service/axios.js");
//reset mock before each calls
beforeEach(() => {
    jest.clearAllMocks();
});
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
        const message = wrapper.find('[data-testid="message"]').text();
        expect(message).toEqual(mockMessage);
    });
    it("if message call failed display the error", async () => {
        const mockError = "something went wrong";
        getMessage.mockRejectedValueOnce(mockError);
        const wrapper = mount(MessageDisplay);
        await flushPromises();
        //check if it is called
        expect(getMessage).toHaveBeenCalledTimes(1);
        const errorMessage = wrapper
            .find('[data-testid="message-error"]')
            .text();
        expect(errorMessage).toEqual(mockError);
    });
});
