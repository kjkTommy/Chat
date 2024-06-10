import { elementUi } from './UI_element';
const popupSettingsMethods = {
    show: () => {
        elementUi.popup.popupBlock.classList.add('open');
    },
    hide: () => {
        elementUi.popup.popupBlock.classList.remove('open');
    },
};
const scrollButton = {
    show: () => {
        elementUi.button.buttonScrollStory.classList.add('visible');
    },
    hide: () => {
        elementUi.button.buttonScrollStory.classList.remove('visible');
    },
};
const popupRegistrationMethods = {
    reverse: () => {
        elementUi.popup.popupRegCard.classList.add('reverse');
        elementUi.popup.blockRegistrationInPopup.classList.add('hide');
        setTimeout(() => {
            elementUi.popup.blockConfirmCode.classList.add('visible');
        }, 370);
    },
    hide: () => {
        elementUi.button.ButtonEnter.addEventListener('click', (e) => {
            e.preventDefault();
            elementUi.mainBlockElements.mainContainer?.classList.add('open');
            elementUi.popup.popupRegBlock.classList.add('done');
            elementUi.popup.blockConfirmCode.classList.remove('block__cod__confirm');
        });
    },
    show: () => {
        elementUi.mainBlockElements.mainContainer?.classList.remove('open');
        elementUi.popup.popupRegCard.classList.remove('reverse');
        elementUi.popup.blockRegistrationInPopup.classList.remove('hide');
        elementUi.popup.blockConfirmCode.classList.remove('visible');
        elementUi.popup.popupRegBlock.classList.remove('done');
    },
};
function warnPopup() {
    elementUi.mainBlockElements.warn?.classList.add('operate');
    setTimeout(() => {
        elementUi.mainBlockElements.warn?.classList.remove('operate');
    }, 2000);
}
const showScrollButton = () => {
    elementUi.button.buttonScrollStory.classList.add('visible');
};
export { popupRegistrationMethods, popupSettingsMethods, scrollButton, showScrollButton, warnPopup };
