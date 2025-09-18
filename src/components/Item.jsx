export default function Item( props ) {
    return (
        
        <div>
            <img width="30%" src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.precio}</p>
        </div>
    );
}