import { DescriptionForm } from "./DescriptionForm"
import { MuscleGroupForm } from "./MuscleGroupForm"
import { SubmitForm } from "./SubmitForm"
import { Weekday } from "./WeekdayForm"


export const WorkoutForm = () => {
    return <>
        <DescriptionForm></DescriptionForm>
        <MuscleGroupForm></MuscleGroupForm>
        <SubmitForm></SubmitForm>
        <Weekday></Weekday>
    </>
}