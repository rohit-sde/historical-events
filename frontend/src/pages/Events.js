import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    { id: "e1", title: "first event" },
    { id: "e2", title: "Second event" },
    { id: "e3", title: "Third event" },
    { id: "e4", title: "fouth event" },
];

function Events() {
    return (
        <>
            <h1>Events page</h1>
            <ul>
                {DUMMY_EVENTS.map((data) => (
                    <li key={data.id}>
                        <Link to={`/events/${data.id}`}>{data.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Events;
