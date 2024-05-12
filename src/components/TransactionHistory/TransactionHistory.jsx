import './TransactionHistory.css'

const TransactionHistory = ({ items }) => {
  return (
    <table className='tb-tb'>
      <thead>
        <tr className='tb-tr'>
          <th className='tb-th-td'>Type</th>
          <th className='tb-th-td'>Amount</th>
          <th className='tb-th-td'>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className='tb-th-td'>{item.type}</td>
            <td className='tb-th-td'>{item.amount}</td>
            <td className='tb-th-td'>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;