import { CoachCard } from "./CoachCard"
import { MessageHistory } from "./MessageHistory"

export const CoachInfo = () => {
    return <>
        <div className="">
            
            <div className="m-4">
                <h4>Current Coach:</h4>
                <CoachCard 
                
                img = "placeholder"
                firstName="John"
                lastName="Smith"
                rating="99"
                age="32"
                contact="jsmith1981@gmail.com"
                canHire={false}
                />

                <hr />

                <h4>Message History</h4>
                <MessageHistory />

                <hr/>

                <h4> Search for a new coach</h4>
                <CoachCard
                
                img = "placeholder"
                firstName="Jack"
                lastName="Carroll"
                rating="95"
                age="20"
                contact="j34134981@gmail.com"

                canHire={true}
/>
            </div>
        </div>




    </>
}