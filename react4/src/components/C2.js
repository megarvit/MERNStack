import { Component } from "react";

class C2 extends Component
{
    constructor()
    {
        super();
        console.log("I am constructor");
    }

    static getDerivedStateFromProps()
    {
        console.log("I am getDerivedStateFromProps method");
        return null;
    }

    componentDidMount()
    {
        console.log("I a componentDidMount method");
    }


    render()
    {
        console.log("I am render method");
        return(
            <div>
                <h1>Lifecycle Methods</h1>
            </div>
        )
    }
}
export default C2;