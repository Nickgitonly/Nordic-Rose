import './style.css';

function ListSection() {
    return (
        <div>
            <ul className="list-container">
                <li className="text-header">A list looks like this:</li> 
                <li className="text-list">First item in the list</li>
                <li className="text-list2">Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
                <li className="text-list">Third item in the list</li>
            </ul>
        </div>
    );
}

export default ListSection;
