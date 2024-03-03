import React, {useId}  from 'react'
//useId is a hook that generates a unique id for the input field


function InputBox({
    label,// to and form label
    amount,// amount value
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",// always forst value of currencyOptions
    amountDisabled = false,
    currencyDisabled = false,   

    
    className = "",}
) {
   

    const amountId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
 //onAmountChange is a function that takes the value of the input field and converts it to a number and will be called when the input field is changed ie new number is added
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    
                    {currencyOptions.map((currency) => (//map is a loop, we dont use for loop because it is not supported in react when we return jsx
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
