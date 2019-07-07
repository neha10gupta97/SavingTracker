import * as React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  TextField
} from "@material-ui/core";

const App = () => {
  const EXPENSE_TYPES = [
    { name: "Travel", id: "travel", val: 0 },
    { name: "Food", id: "food", val: 0 },
    { name: "Clothes", id: "clothes", val: 0 }
  ];
  const [expenseType, setExpenseType] = React.useState(EXPENSE_TYPES[0]);

  const setSelectType = (e: any) => {
    setExpenseType(
      EXPENSE_TYPES.filter(expense => expense.id === e.target.value)[0]
    );
  };

  const amountChange = (e: any) => {
    const updatedExpenseType = {
      ...expenseType,
      val: e.target.value
    };
    setExpenseType(updatedExpenseType);
  };

  return (
    <>
      <FormControl variant="outlined">
        <Select value={expenseType.name} onChange={e => setSelectType(e)}>
          <MenuItem value="" disabled>
            Select Type
          </MenuItem>
          {EXPENSE_TYPES.map(expense => (
            <MenuItem value={expense.id} key={expense.id}>
              {expense.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select the type of expense</FormHelperText>
      </FormControl>

      <br />
      <TextField
        variant="outlined"
        placeholder="Enter amount"
        type="number"
        onChange={e => amountChange(e)}
      />
    </>
  );
};

export default App;
