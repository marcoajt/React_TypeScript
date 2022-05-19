import React from "react";
import style from './Botao.module.scss';

class Buttons extends React.Component< any, any >{
    render(){
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Buttons;