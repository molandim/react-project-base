import * as React from 'react';

interface IButtonProps {
    children: string;
}

export class ButtonComponent extends React.PureComponent<IButtonProps> {
    render(){
        return <button>{this.props.children}</button>
    }
}