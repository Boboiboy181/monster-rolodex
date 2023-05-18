// import { Component } from "react";
import { ChangeEventHandler } from "react";

import "./search-box.styles.scss";

type SearchBoxProps = {
    className: string,
    placeholder: string,
    onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ onChangeHandler, className, placeholder }: SearchBoxProps) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler} />
);

// class SearchBox extends Component {
//     render() {
//         const {onChangeHandler, className, placeholder} = this.props
//         return (
// 			<input className={`search-box ${className}`} type='search' placeholder={placeholder} onChange={onChangeHandler}/>
// 		);
//     }
// }


export default SearchBox;