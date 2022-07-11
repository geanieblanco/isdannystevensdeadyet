export default function TextInput(props){
    return (
        <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.inputAction}
            className={props.inputClass}
        />
    )
}