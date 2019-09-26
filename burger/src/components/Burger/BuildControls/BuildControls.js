import React from 'react';
import './BuildControls.css';
import BuilderControl from './BuildControl/BuildControl'

const controls =[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]
const buildControls = props =>(
    <div className='BuildControls'>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuilderControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className='OrderButton'
            disabled={!props.purchasable}
            onClick={props.ordered}
        >Order me</button>
    </div>
);

export default buildControls;