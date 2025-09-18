import Item from "./Item";
function ItemListContainer(props) {
return (
    <div>
        <div>
            <h1>{props.greetings}</h1>
        </div>
        <section className="itemList">
            <h2>Productos</h2>
            <Item logo= "https://rjc-juegosdidacticos.netlify.app/Imagenes-RJC/logo.jpg" />
            <Item title="🚗 Auto con bloques" img="https://rjc-juegosdidacticos.netlify.app/Imagenes-RJC/imgs/Autito%204.jpg" description= "🚘 Incluye piezas encastrables. Ideal para desarrollar coordinación y motricidad, Pensado para el juego libre y didáctico.  Desafía a guiar la canica con movimientos suaves, Recomendado para actividades inclusivas" />
            <Item title= "🌈 Laberinto de colores con canica" img="https://rjc-juegosdidacticos.netlify.app/Imagenes-RJC/imgs/Laberinto2.jpg" description= "🧠 Ejercita la percepción visual y concentración, Ideal para dinámicas en grupo y terapias." />
            <Item title= "🔶 Tatetí Gigante" img= "https://rjc-juegosdidacticos.netlify.app/Imagenes-RJC/imgs/ta-te-ti.jpg" description= "🎯 Versión de gran tamaño y colorida, Muy visual, perfecto para plazas, patios o aulas Estimula la estrategia y el juego grupal" />
        </section>
    </div>
);
}





export default ItemListContainer;