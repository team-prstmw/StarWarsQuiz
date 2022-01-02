import HtmlElement from '../htmlElement/HtmlElement';
import './styles.css';
import Answer from '../answer/answer';

class AnswersList extends HtmlElement {
  constructor(answers = []) {
    super(['answers-list-container'], 'div');
    this.answers = answers;
  }

  render() {
    const answersListTable = document.createElement('table');
    answersListTable.className = 'answers-list-table';

    const answersListTableHead = document.createElement('thead');
    answersListTableHead.className = 'answers-list-thead';

    const answersListTableHeaderRow = document.createElement('tr');
    answersListTableHeaderRow.className = 'answers-header-row';

    const headers = ['', 'You', 'Answer'];

    headers.forEach((header) => {
      const answersHeader = document.createElement('th');
      answersHeader.className = 'answers-header';
      answersHeader.innerText = header;
      answersListTableHeaderRow.append(answersHeader);
    });

    answersListTableHead.append(answersListTableHeaderRow);
    answersListTable.append(answersListTableHead);

    const answersListTableBody = document.createElement('tbody');
    answersListTableBody.className = 'answers-list-tbody';
    answersListTable.append(answersListTableBody);

    this.answers.forEach(({ image, userAnswer, correctAnswer }) => {
      const answer = new Answer({ image, userAnswer, correctAnswer });

      answersListTableBody.appendChild(answer.render());
    });
    return answersListTable;
  }
}

export default AnswersList;
