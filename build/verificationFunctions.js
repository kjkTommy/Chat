import { elementUi } from './UI_element';
import { warnPopup } from './popupMethods';
export function checkLength(element) {
    if (element === elementUi.input.inputSendMessage.value) {
        const isMessageEmpty = elementUi.input.inputSendMessage.value.trim() === '';
        const isIncorrectLength = element.length < 1 || isMessageEmpty;
        if (isIncorrectLength) {
            warnPopup();
            elementUi.form.formSendMessage.reset();
            elementUi.mainBlockElements.elementLi.innerHTML = '';
        }
    }
    if (element == elementUi.popup.userName.value) {
        const isUserNameEmpty = elementUi.popup.userName.value.trim() === '';
        const isIncorrectLength = element.length < 1 || isUserNameEmpty;
        if (isIncorrectLength) {
            warnPopup();
            elementUi.form.formChooseName.reset();
        }
    }
}
