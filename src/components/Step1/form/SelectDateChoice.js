import React, {useEffect, useState} from "react";
import axios from "axios";
import {dateToStr} from "../../../helpers/dateToStr";

function SelectChoixDate({name, onChange}) {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/v1/groupinfosessions/next")
            .then((res) => {
                setDates(res.data);
            })
            .catch((err) => {
                console.log("err : ", err);
            });
    }, []);

    return (
        <div>
            <select
                name={name}
                id="DatesReunionsInformation-select"
                onChange={onChange}
            >
                <option value={dates.length ? dates[0] : ""}>--Dates--</option>
                {dates.length &&
                dates.map((date) => {
                    let dateStr = dateToStr(date);

                    return (
                        <option key={date} value={date}>
                            {dateStr}
                        </option>
                    );
                })}
            </select>
            <br/>
        </div>
    );
}

export default SelectChoixDate;
