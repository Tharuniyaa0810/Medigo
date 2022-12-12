const ExpenseEntryItem =(props) =>{

    return(
        <div>
            <div className="hel"><b>Name: </b><em>{props.name}</em></div>
            <div><b>Amount: </b><em>{props.amount}</em></div>
            <div className="hel"><b>SpendDate: </b><em>{props.spendDate.toString()}</em></div>
            <div><b>Category: </b><em>{props.Category}</em></div>
        </div>
    );
    
    }
    export default ExpenseEntryItem;
    //App.js file:
    //------------
    
    
    
    // <ExpenseEntryItem
    // name="sathya" amount="6788" spendDate={new Date("2020-12-23")} Category="food"
    // ></ExpenseEntryItem>
 