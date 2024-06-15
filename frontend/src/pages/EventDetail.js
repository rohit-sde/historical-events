import { useParams } from "react-router-dom";

function EventDetailPage() {
    const param = useParams();

    return (
        <>
            <h1>Event Detail Page</h1>
            <p>Event id: {param.eventId}</p>
        </>
    );
}
export default EventDetailPage;
