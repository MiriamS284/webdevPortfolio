"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminCalendar from "../../../../_components/AdminCalendar";
import EventForm from "../../../../_components/EventForm";
import { toast } from "react-toastify";

export default function Page() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();

        const formattedEvents = data.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }));

        setEvents(formattedEvents);
      } catch (error) {
        toast.error("Failed to load events.");
      }
    }
    fetchEvents();
  }, []);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleSaveEvent = async (newEvent) => {
    try {
      let savedEvent;
      if (selectedEvent) {
        // Updating an existing event
        const response = await fetch(`/api/events?id=${selectedEvent._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEvent),
        });

        if (response.ok) {
          savedEvent = await response.json();
          setEvents(
            events.map((e) => (e._id === savedEvent._id ? savedEvent : e))
          );
          toast.success("Event updated successfully!");
        } else {
          throw new Error("Failed to update event.");
        }
      } else {
        // Creating a new event
        const response = await fetch("/api/events", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEvent),
        });

        if (response.ok) {
          savedEvent = await response.json();
          setEvents((prevEvents) => [...prevEvents, savedEvent]);
          toast.success("Event created successfully!");
        } else {
          throw new Error("Failed to create event.");
        }
      }
      setSelectedEvent(null);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteEvent = async () => {
    if (!selectedEvent) return;

    try {
      const response = await fetch(`/api/events?id=${selectedEvent._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setEvents(events.filter((e) => e._id !== selectedEvent._id));
        setSelectedEvent(null); // Clear selection after deletion
        toast.success("Event deleted successfully!");
      } else {
        throw new Error("Failed to delete event.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Admin Kalender</h1>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Zurück zum Dashboard
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <EventForm onSave={handleSaveEvent} selectedEvent={selectedEvent} />
          {selectedEvent && (
            <button
              onClick={handleDeleteEvent}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete Event
            </button>
          )}
        </div>
        <div className="md:col-span-3">
          <AdminCalendar events={events} onEventSelect={handleEventSelect} />
        </div>
      </div>
    </div>
  );
}
