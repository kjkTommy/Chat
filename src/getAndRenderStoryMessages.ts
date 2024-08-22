import { elementUi } from './UI_element';
import { setMessageInLocalStorage } from './localStorage';
import { getMessageStory } from './request';
import { templateMessage } from './templateFunction';
import { infoAboutMessage } from './types';

let storyMessage: infoAboutMessage[] = [];

export const getStoryFromLocalStorage = async () => {
    try {
        const response = await getMessageStory();
        const messages = await response.json();

        setMessageInLocalStorage(JSON.stringify(messages));

        const messagesString = localStorage.getItem('message');
        const messagesArray = JSON.parse(messagesString!);
        storyMessage = [].concat(messagesArray.messages);

        showHistoryMessage();

        return storyMessage;
    } catch (error) {
        console.error(error);
    }
};

let chankMessage = 0;

const showHistoryMessage = () => {
    const currentStory = storyMessage.slice(chankMessage, chankMessage + 20);
    currentStory.forEach((message) => {
        const { text, user, createdAt } = message;
        const { name } = user;
        templateMessage(name, text, createdAt);
        const liContainer = elementUi.template.templateContainer.content.cloneNode(true);
        elementUi.mainBlockElements.ulList.prepend(liContainer);
    });
    elementUi.mainBlockElements.mainBlock.scrollTop = elementUi.mainBlockElements.mainBlock.scrollHeight;
    chankMessage += 20;
};

export const onScroll = () => {
    const { mainBlock } = elementUi.mainBlockElements;
    const isScrollTop = mainBlock.scrollTop === 0;
    if (isScrollTop) {
        const previousScrollHeight = mainBlock.scrollHeight;
        showHistoryMessage();
        mainBlock.scrollTop = mainBlock.scrollHeight - previousScrollHeight;
    }
};
