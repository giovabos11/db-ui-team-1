import { useContext, useState } from "react"
import { DescriptionForm } from "./DescriptionForm"
import { MuscleGroupForm } from "./MuscleGroupForm"
import { SubmitForm } from "./SubmitForm"
import { Weekday } from "./WeekdayForm"
import { Button } from "react-bootstrap"
import { AppContext } from "../global/AppContext"
import { add_workouts_from_exercises } from "../../api/allApi"


export const WorkoutForm = ({ showPopup, setShowPopup, cartItems, setCartItems }) => {
    const appContext = useContext(AppContext);
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

    const handleSubmit = () => {
        console.log("submitted form to handleSubmit");

        if (cartItems.length !== 0) {
            let exercisesIds = [];

            cartItems.forEach(item => {
                exercisesIds.push(item.id);
            });

            add_workouts_from_exercises(appContext.type, appContext.id, exercisesIds, muscle, exercisesIds.length * 10, weekday, description);
            setCartItems([]);
        }
        setDescription("");
        setMuscle("");
        setWeekday("");
        setShowPopup(false);
    }

    return <>
        <div>
            {showPopup && (
                <>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex flex-column position-fixed start-50 translate-middle-x p-3 rounded" style={{ width: "30%", zIndex: 9999, top: "25%", backgroundColor: "#F5F5DC" }}>
                            <label>Day</label>
                                <select className="form-select-sm" id="weekday" value={weekday} onChange={handleWeekday}>
                                    <option value="">Choose a weekday</option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>
                                </select>
                            
                            <label>Muscle</label>
                                <div className="">
                                    <input
                                        type="text"
                                        id="muscleGroup"
                                        name="muscleGroup"
                                        value={muscle}
                                        onChange={handleMuscle}
                                        placeholder="Enter a muscle group"
                                        className="form-control"
                                    />
                                </div>
                            
                            <label>Description</label>
                                <div className="">
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={description}
                                        onChange={handleDescription}
                                        placeholder="Enter a description"
                                        className="form-control" 
                                        style={{ height: "", resize: "none" }}
                                        rows="4"
                                    ></textarea>
                                </div>
                            

                            <div className="d-flex align-items-center justify-content-center">
                                <div className="m-3">
                                    <label>         
                                            <Button type="submit " className="btn btn-primary" >
                                                Submit
                                            </Button>
                                    </label>
                                </div>
                                
                                <div className="m-3">
                                    <label>
                                        <Button className="btn btn-danger"
                                            onClick={() => {
                                                setShowPopup(false)
                                            }}
                                        >Cancel</Button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            )}

        </div>
    </>
}