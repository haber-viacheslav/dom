import transactions from './data/transactions.js';
import transactionHistory from './data/transactions.js';

// <tr>
// 	<td>ID транзакции</td>
// 	<td>Сумма</td>
// 	<td>Дата</td>
// 	<td>Кто</td>
// 	<td>Тип транзации</td>
// 	<td>Имя счёта</td>
// 	<td>Номер счёта</td>
// </tr>;

//   {
//     id: '758d5283-358e-4fbb-b222-a17fd04e8916',
//     amount: '179.07',
//     date: '2012-02-01T22:00:00.000Z',
//     business: 'Bogan - DuBuque',
//     name: 'Auto Loan Account 7313',
//     type: 'deposit',
//     account: '19808943',
//   },
const makeTransactionTableRowMarkup = ({
	id,
	amount,
	date,
	name,
	business,
	type,
	account,
}) => {
	return `
    			<tr>
					<td>${id}</td>
					<td>${amount}</td>
					<td>${date}</td>
					<td>${business}</td>
					<td>${type}</td>
					<td>${name}</td>
					<td>${account}</td>
				</tr>
    `;
};
// console.log(transactionHistory);
console.log(makeTransactionTableRowMarkup(transactionHistory[0]));

const makeTransactionTableRowsMarkup = transactionHistory
	.map(makeTransactionTableRowMarkup)
	.join('');
console.log(makeTransactionTableRowsMarkup);

const tableEL = document.querySelector('.js-transaction-table');
tableEL.insertAdjacentHTML('beforeend', makeTransactionTableRowsMarkup);
