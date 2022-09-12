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

/*
const h1 = document.createElement('h1')
h1.textContent = "Imperative programming..."
h1.className = "header"
document.getElementById('root').append(h1)
*/

//...React breaks down each part piece by piece - it's Declarative programming 

/*
ReactDOM.render(<h1 className="header">React is declarative...</h1>, 
document.getElementById('root'))
*/ 

//..JSX returns JavaScript objects 


// const pageDetail = 
//     <div>
//         <h1>Write some React</h1>
//         <p>Code today</p>
//         </div>

//  ReactDOM.render(
//     pageDetail,
//     document.getElementById('root')
//  ) 

function NavBar(){
    return(
        <nav>
            <h1>Tutorial website</h1>
            <ul> 
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

ReactDOM.render(
        <NavBar/>, 
        document.getElementById('root')   
)