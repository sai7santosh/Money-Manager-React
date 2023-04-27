// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-row">
      <p className="row-text">{title}</p>
      <p className="row-text">Rs {amount}</p>
      <p className="row-text">{type}</p>
      <button
        className="delete-button"
        type="button"
        onClick={onDeleteTransaction}
        data-testid="delete"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
