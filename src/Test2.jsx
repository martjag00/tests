import React from "react";
import {TiHeartFullOutline} from "react-icons/ti"; //impordib

class Test2 extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            like: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }



    handleChange() { //https://reactjs.org/docs/forms.html

        this.setState({
            like: this.state.likes+1 //peaks vist olema, testin'
        });
    }
    render(){
        return(
            <div><div className={"description"}>
                    <p>
                        Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>like-id:</code> järel kuvama.
                    </p>
                </div>

                <div style={{display:"flex", alignItems: "center"}}>
                    <div>
                    Peaks tulema like-i: {this.state.likes}
                    </div>
                    <TiHeartFullOutline onClick= {this.handleChange}/>
                    <div>Click me</div>
                </div>
            </div>
        );
    }
}

export default Test2;
