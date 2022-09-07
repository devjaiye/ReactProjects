// function Main(){
//     return(
//         <h1>This is the Main file</h1>
//     )
// }

// ReactDOM.render(
//     <div> 
//         <Main/>
//     </div>, 
//     document.getElementById('root')
// )


//... The JS code belove is an imperative way to program, React allows declarative  
const h1 = document.createElement('h1')
h1.textContent = "Imperative programming..."
h1.className = "header"

document.getElementById('root').append(h1)