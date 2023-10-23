describe('Creating a message', () => {
    it('Displays the message in the list', () => {
        // next.js 프로젝트 루트 경로에 접속
        cy.visit('http://localhost:3000');

        // data-testid 속성을 사용하여 DOM 요소를 찾음
        // 이후, type() 메서드를 사용하여 "New message" 텍스트를 입력
        cy.get('[data-testid="messageText"]')
            .type('New message');

        // data-testid 속성을 사용하여 DOM 요소를 찾음
        // 이후, click() 메서드를 사용하여 sendButton 클릭
        cy.get('[data-testid="sendButton"]')
            .click();

        // data-testid 속성을 사용하여 DOM 요소를 찾음
        // 이후, should() 메서드를 사용하여 텍스트를 확인
        // sendButton 클릭 이후 값이 초기화 되어야 한다.
        cy.get('[data-testid="messageText"]')
            .should('have.value', '');

        // 이후 입력한 New message 값이 도큐먼트 어딘가에 존재해야함
        cy.contains('New message');
    });
});