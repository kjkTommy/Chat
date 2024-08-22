export const elementUi = {
    button: {
        buttonExit: document.querySelector('.exit'),
        buttonSettings: document.getElementById('settings__button'),
        applyNameButton: document.querySelector('.applyName__button'),
        closeButton: document.getElementById('close__button'),
        getCodeButton: document.getElementById('getCode__reg__box'),
        sendCodeButton: document.getElementById('sendCode__reg__box'),
        ButtonEnter: document.getElementById('Confirm__button'),
        buttonScrollStory: document.querySelector('.push__scroll__down'),
    },
    form: {
        formChooseName: document.querySelector('.choose__name'),
        formSendMessage: document.getElementById('send__message__form'),
        formGetTokenEmail: document.querySelector('.form__reg__box'),
        formEntreTokenFromMail: document.querySelector('.Confirm__form'),
    },
    input: {
        inputSendMessage: document.querySelector('.send__message__input'),
        inputSendMail: document.querySelector('.input__reg__box'),
        inputTokenFromMail: document.querySelector('.Confirm__input'),
    },
    popup: {
        popupRegBlock: document.querySelector('.popup__reg'),
        popupRegCard: document.querySelector('.popup__reg__box'),
        popupBlock: document.querySelector('.modal'),
        blockRegistrationInPopup: document.querySelector('.block__registration'),
        blockConfirmCode: document.querySelector('.block__cod__confirm'),
        userName: document.querySelector('.name'),
    },
    mainBlockElements: {
        mainBlock: document.querySelector('.main__block'),
        ulList: document.querySelector('ul'),
        elementLi: document.querySelector('li'),
        mainContainer: document.querySelector('.container'),
        warn: document.querySelector('.warn'),
    },
    template: {
        templateContainer: document.getElementById('template__container'),
    },
};
