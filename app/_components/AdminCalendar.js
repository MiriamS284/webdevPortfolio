"use client";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import de from "date-fns/locale/de";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  de: de,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function AdminCalendar({ events, onEventSelect }) {
  return (
    <div className="w-full h-full">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        selectable
        onSelectEvent={(event) => onEventSelect(event)} // Trigger event selection
      />
    </div>
  );
}
