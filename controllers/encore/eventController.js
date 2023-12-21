const Event = require("../../models/encore/Event");

// get all events
async function getEvents(req, res) {

    const city = req.query.city;
    let dateFrom;
    req.query.dateFrom != "" ? dateFrom = req.query.dateFrom : dateFrom = "";
    let dateTo;
    req.query.dateTo != "" ? dateTo = req.query.dateTo + "T23:59" : dateTo = "";
    const artist_id = req.query.artist_id;

    if (artist_id != "") {
        const eventsOther = await Event.find({ artist_id: artist_id });
        res.status(200).json(eventsOther);
    } else {
        if (city === "All") {
            if (dateTo === "") {
                const events = await Event.find({ date: { $gte: dateFrom } }).sort({ date: 1 });
                res.status(200).json(events);
            }
            if (dateTo != "") {
                const events = await Event.find({ date: { $gte: dateFrom, $lte: dateTo } }).sort({ date: 1 });
                res.status(200).json(events);

            }
        } else {
            if (dateTo === "") {
                const events = await Event.find({ city: city, date: { $gte: dateFrom } }).sort({ date: 1 });
                res.status(200).json(events);
            }
            if (dateTo != "") {
                const events = await Event.find({ city: city, date: { $gte: dateFrom, $lte: dateTo } }).sort({ date: 1 });
                res.status(200).json(events);
            }
        }
    }
}

// get single event
async function getSingleEvent(req, res) {
    const event_id = req.params.id;
    const event = await Event.findOne({ event_id: event_id });
    res.status(200).json(event);
}

// get events with regex
async function getRegexEvent(req, res) {
    const filter = req.query.filter;
    const regex = new RegExp(filter, "i");
    const events = await Event.find().sort({ date: 1 });
    const events_filtered_name = events.filter(event => {
        const string = event.artist_name;
        return regex.test(string);
    });
    const events_filtered_city = events.filter(event => {
        const string = event.city;
        return regex.test(string);
    });
    const array_final = [];
    for (i = 0; i < events_filtered_name.length; i++) {
        if (array_final.includes(events_filtered_name[i])) {
            continue;
        } else {
            array_final.push(events_filtered_name[i]);
        }
    }
    for (i = 0; i < events_filtered_city.length; i++) {
        if (array_final.includes(events_filtered_city[i])) {
            continue;
        } else {
            array_final.push(events_filtered_city[i]);
        }
    }
    res.status(200).json(array_final);
}

module.exports = {
    getEvents,
    getSingleEvent,
    getRegexEvent
}; 