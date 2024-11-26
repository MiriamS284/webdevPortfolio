import connectToDatabase from "../../config/database";
import Event from "../../models/Event";

// Fetch all events (GET)
export async function GET(req) {
  await connectToDatabase();
  try {
    const events = await Event.find();
    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

// Create a new event (POST)
export async function POST(req) {
  await connectToDatabase();
  try {
    const { title, start, end, allDay } = await req.json();
    const newEvent = await Event.create({ title, start, end, allDay });
    return new Response(JSON.stringify(newEvent), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
}

// Update an event (PUT)
export async function PUT(req) {
  await connectToDatabase();
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Event ID is required" }), {
      status: 400,
    });
  }

  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, await req.json(), {
      new: true,
    });
    return new Response(JSON.stringify(updatedEvent), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

// Delete an event (DELETE)
export async function DELETE(req) {
  await connectToDatabase();
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Event ID is required" }), {
      status: 400,
    });
  }

  try {
    await Event.findByIdAndDelete(id);
    return new Response(
      JSON.stringify({ message: "Event deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
