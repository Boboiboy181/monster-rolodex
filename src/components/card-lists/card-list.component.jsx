// import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.scss';

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {monsters.map((monster) =>
                <Card key={monster.id} monster={monster} />
            )}
        </div>
    );
};

// class CardList extends Component {
//     render() {
//         console.log('render from cardlist')
//         const { monsters } = this.props
//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     return (
//                         <Card key={monster.id} monster={monster} />
//                     )
//                 }
//                 )}
//             </div>

//         )
//     }
// }

export default CardList;