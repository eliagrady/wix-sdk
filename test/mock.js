const postMessageSpy = sinon.spy();

window.parent.postMessage = postMessageSpy;
export default postMessageSpy;
