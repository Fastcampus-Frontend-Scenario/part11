import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewMessageForm } from './NewMessageForm'
import { expect, jest } from '@jest/globals';

describe('<NewMessageForm />', () => {
  let sendHandler: jest.Mock
  describe('clicking the send button', () => {
    async function sendMessage() {
      const user = userEvent.setup()
      sendHandler = jest.fn().mockName('sendHandler')


      render(<NewMessageForm onSend={sendHandler} />)

      await user.type(
        screen.getByTestId('messageText'),
        'New message',
      );
      await user.click(screen.getByTestId('sendButton'))
    }

    it('clears the text field', async () => {
      await sendMessage()
      expect(screen.getByTestId<HTMLInputElement>('messageText').value).toEqual('')
    })

    it('calls the send handler', async () => {
      await sendMessage()
      expect(sendHandler).toHaveBeenCalledWith('New message')
    });
  })
})