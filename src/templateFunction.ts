import { format } from 'date-fns';
import { elementUi } from './UI_element';

export const templateMessage = (name: string, text: string, createdAt: string): void => {
    const UserName = elementUi.template.templateContainer.content.querySelector('b') as HTMLElement;
    const messageFromUser = elementUi.template.templateContainer.content.querySelector('span') as HTMLSpanElement;
    messageFromUser.textContent = `${text} ${format(createdAt, 'HH:MM')}`;
    UserName.textContent = `${name}`;
};
