import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <div className={s.container}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr className={s.head_table}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(el => {
            return (
              <tr key={el.id}>
                <td>{el.type}</td>
                <td>{el.amount}</td>
                <td>{el.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
