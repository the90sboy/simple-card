import React from "react";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";

class SimpleCard extends React.Component{
    render(){
        return(
            <div className="flex">
                <div>
                    <Image/>
                </div>
                <div>
                    <Title title="My Profile"/>
                    <Description description="My name is Kafui Bernard Ayekple.
                     I'm a tech enthusiast and i love to code."/>
                </div>
            </div>
        )
    }
}

export default SimpleCard