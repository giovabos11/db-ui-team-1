import { useState } from "react"
import { DescriptionForm } from "./DescriptionForm"
import { MuscleGroupForm } from "./MuscleGroupForm"
import { SubmitForm } from "./SubmitForm"
import { Weekday } from "./WeekdayForm"
import { Button } from "react-bootstrap"


export const WorkoutForm = ({ showPopup, setShowPopup }) => {
    

    const [description, setDescription] = useState("");
    const [muscle, setMuscle] = useState("");
    const [weekday, setWeekday] = useState("");


    const handleDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleMuscle = (e) => {
        setMuscle(e.target.value);
    };


    const handleWeekday = (e) => {
        setWeekday(e.target.value);
    };

    const handleSubmit = (e) => {
        setShowPopup(false);
    }

    return <>
    <div className="">
    {showPopup && (
        <>
        
       
        <form className="bg-dark d-flex flex-column position-fixed start-50 translate-middle-x p-3 " style={{width:"30%", zIndex:9999, top:"25%"}}>
        <label>
            <select className="form-select-lg" id="weekday" value={weekday} onChange={handleWeekday}>
                <option value="">Choose a weekday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
        </label>
        <label>
            <div className="">
                <input
                    type="text"
                    id="muscleGroup"
                    name="muscleGroup"
                    value={muscle}
                    onChange={handleMuscle}
                    placeholder="Enter a muscle group"
                    className="form-input-sm"
                />
            </div>
        </label>
        <label>
            <div className="">
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={handleDescription}
                    placeholder="Enter a description"
                    className="form-control" style={{ }}
                    rows="4"
                ></textarea>
            </div>
        </label>

        
        <label onSubmit={handleSubmit} className="" style={{ height: '' }}>
            <div className="form-group">
                <Button type="submit " className="btn btn-primary" >
                    Submit
                </Button>
            </div>
        </label>

        <label>
            <Button
            onClick={() =>{
                setShowPopup(false)
            }}
            >Cancel</Button>
        </label>
    </form>


    </>

    )}
    </div>
    </>       
}