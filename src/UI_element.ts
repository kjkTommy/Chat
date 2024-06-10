export const elementUi = {
    button: {
        buttonExit: document.querySelector('.exit') as HTMLButtonElement,
        buttonSettings: document.getElementById('settings__button') as HTMLButtonElement,
        applyNameButton: document.querySelector('.applyName__button') as HTMLButtonElement,
        closeButton: document.getElementById('close__button') as HTMLButtonElement,
        getCodeButton: document.getElementById('getCode__reg__box') as HTMLButtonElement,
        sendCodeButton: document.getElementById('sendCode__reg__box') as HTMLButtonElement,
        ButtonEnter: document.getElementById('Confirm__button') as HTMLButtonElement,
        buttonScrollStory: document.querySelector('.push__scroll__down') as HTMLButtonElement,
    },
    form: {
        formChooseName: document.querySelector('.choose__name') as HTMLFormElement,
        formSendMessage: document.getElementById('send__message__form') as HTMLFormElement,
        formGetTokenEmail: document.querySelector('.form__reg__box') as HTMLFormElement,
        formEntreTokenFromMail: document.querySelector('.Confirm__form') as HTMLFormElement,
    },
    input: {
        inputSendMessage: document.querySelector('.send__message__input') as HTMLInputElement,
        inputSendMail: document.querySelector('.input__reg__box') as HTMLInputElement,
        inputTokenFromMail: document.querySelector('.Confirm__input') as HTMLInputElement,
    },
    popup: {
        popupRegBlock: document.querySelector('.popup__reg') as HTMLElement,
        popupRegCard: document.querySelector('.popup__reg__box') as HTMLElement,
        popupBlock: document.querySelector('.modal') as HTMLElement,
        blockRegistrationInPopup: document.querySelector('.block__registration') as HTMLElement,
        blockConfirmCode: document.querySelector('.block__cod__confirm') as HTMLElement,
        userName: document.querySelector('.name') as HTMLInputElement,
    },
    mainBlockElements: {
        mainBlock: document.querySelector('.main__block') as HTMLDivElement,
        ulList: document.querySelector('ul') as HTMLUListElement,
        elementLi: document.querySelector('li') as HTMLLIElement,
        mainContainer: document.querySelector('.container'),
        warn: document.querySelector('.warn'),
    },
    template: {
        templateContainer: document.getElementById('template__container') as HTMLTemplateElement,
    },
};
