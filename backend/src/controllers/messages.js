import db from "../models/database.js";
import { QUERY } from "../query/queries.js";

export const getMessages = (req, res) => {
    db.query(QUERY.messages.getMessages, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Database error");
        } else {
            res.status(200).send(result);
        }
    }   
    );
};

export const postMessage = (req, res) => {
    db.query(QUERY.messages.postMessage,  Object.values(req.body), (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Database error");
        } else {
            res.status(200).send("Message added");
        }
    }
    );
};

