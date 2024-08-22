import { format } from 'date-fns';
import { elementUi } from './UI_element';
export const templateMessage = (name, text, createdAt) => {
    const UserName = elementUi.template.templateContainer.content.querySelector('b');
    const messageFromUser = elementUi.template.templateContainer.content.querySelector('span');
    messageFromUser.textContent = `${text} ${format(createdAt, 'HH:MM')}`;
    UserName.textContent = `${name}`;
};
