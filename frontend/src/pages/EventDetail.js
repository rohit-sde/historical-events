import { useParams, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
    // const param = useParams();
    // const id = params.eventId;

    const data = useLoaderData();

    return <EventItem event={data.event} />;
}
export default EventDetailPage;

export async function loader({ request, params }) {
    const id = params.eventId;

    const response = await fetch("http://locahost:8080/event/" + id);

    if (!response.ok) {
        throw json(
            { message: "Could not fetch details for selected event." },
            { status: 500 }
        );
    } else {
        return response;
    }
}
