function HelloWorld() {
    
    const data = ['Hello','World'].join(' ')
    const string = "I love React!"
    const number1 = 5;
    const number2 = 6;
    let sum = number1 + number2
    let str = string.length
   
    
    
    
    return (
        <div>
        <div>{data}</div>
        <div>Sum of 5+6 : {sum}</div>
        <div>The "{string}" length is {str}</div>
        </div>
    )

}


export default HelloWorld