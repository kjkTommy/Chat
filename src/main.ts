import { elementUi } from './UI_element';
import { webSocket } from './WebSocket';
import { setToken } from './cookie';
import { getStoryFromLocalStorage, onScroll } from './getAndRenderStoryMessages';
import { popupRegistrationMethods, popupSettingsMethods, scrollButton } from './popupMethods';
import { changeUserName, getDataUser, tokenForUser } from './request';

elementUi.mainBlockElements.mainBlock.addEventListener('scroll', function () {
    const scrollPosition = elementUi.mainBlockElements.mainBlock.scrollTop;
    console.log('Текущая прокрутка страницы:', scrollPosition);
});

elementUi.form.formSendMessage.addEventListener('submit', (event) => {
    event.preventDefault();
    webSocket.SEND_MESSAGE(elementUi.input.inputSendMessage.value);
    elementUi.form.formSendMessage.reset();
});
elementUi.button.buttonSettings.addEventListener('click', (e) => {
    e.preventDefault();
    popupSettingsMethods.show();
    console.log(elementUi.mainBlockElements.mainBlock.scrollTop === 1067);
});
elementUi.button.closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupSettingsMethods.hide();
});
elementUi.button.sendCodeButton.addEventListener('click', (e) => {
    e.preventDefault();
    popupRegistrationMethods.reverse();
    popupRegistrationMethods.hide();
});
elementUi.form.formGetTokenEmail.addEventListener('submit', (e) => {
    e.preventDefault();
    tokenForUser();
    popupRegistrationMethods.reverse();
    elementUi.form.formGetTokenEmail.reset();
});
elementUi.form.formEntreTokenFromMail.addEventListener('click', (e) => {
    e.preventDefault();
    setToken(elementUi.input.inputTokenFromMail.value);
    elementUi.form.formEntreTokenFromMail.reset();
    popupRegistrationMethods.hide();
});
elementUi.form.formChooseName.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputName = elementUi.popup.userName.value;

    try {
        changeUserName(inputName);
        const dataUser = getDataUser();
        console.log(dataUser);
    } catch (error) {
        console.error(error);
    }
});
window.addEventListener('DOMContentLoaded', () => {
    webSocket.INIT_CONNECTION();
    getStoryFromLocalStorage();
});
elementUi.button.buttonExit.addEventListener('click', () => {
    webSocket.CLOSE();
    popupRegistrationMethods.show();
});
elementUi.mainBlockElements.mainBlock.addEventListener('scroll', () => {
    if (elementUi.mainBlockElements.mainBlock.scrollTop === 849) {
        scrollButton.hide();
    } else {
        scrollButton.show();
    }
    onScroll();
});

elementUi.button.buttonScrollStory.addEventListener('click', () => {
    elementUi.mainBlockElements.mainBlock.scrollTo({
        top: elementUi.mainBlockElements.mainBlock.scrollHeight,
        behavior: 'smooth',
    });
});
