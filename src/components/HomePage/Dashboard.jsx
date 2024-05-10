
import React from 'react';

function DashboardPage() {
  const handleAddBudget = (e) => {
    e.preventDefault();

    console.log('Budget added');
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
   
    console.log('Expense added');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Dashboard</h2>
      <div style={styles.budgetPlanner}>
        <h3 style={styles.sectionHeading}>Budget Planner</h3>
        <form onSubmit={handleAddBudget} style={styles.form}>
          <input
            type="text"
            placeholder="Budget Name"
            defaultValue="Groceries"
            readOnly
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Amount"
            defaultValue="200"
            readOnly
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Add Budget</button>
        </form>
      </div>
      <div style={styles.expenseTracker}>
        <h3 style={styles.sectionHeading}>Expense Tracker</h3>
        <form onSubmit={handleAddExpense} style={styles.form}>
          <input
            type="text"
            placeholder="Expense Name"
            defaultValue="Dinner"
            readOnly
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Amount"
            defaultValue="50"
            readOnly
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Add Expense</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  budgetPlanner: {
    marginBottom: '30px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  expenseTracker: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  sectionHeading: {
    fontSize: '20px',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default DashboardPage;

