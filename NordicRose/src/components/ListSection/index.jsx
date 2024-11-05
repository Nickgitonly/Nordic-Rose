import './style.css';

function ListSection() {
    return (
        <div>
            <ul>
                <li className="text-header">A list looks like this:</li> 
                <li className="text-section">First item in the list</li>
                <li className="text-section">Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
                <li className="text-section">Third item in the list</li>
            </ul>
        </div>
    );
}

export default ListSection;