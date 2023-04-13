import { CoachCard } from "./CoachCard"
import { MessageCard } from "./MessageCard"

export const CoachInfo = () => {
    return <> 
    <div className="">
        <h4>Current Coach:</h4>
        <div className="m-4">
        <CoachCard></CoachCard>
        </div>
        <hr/>
        <h4>Message History</h4>
        <MessageCard></MessageCard>
    </div>




    </>
}