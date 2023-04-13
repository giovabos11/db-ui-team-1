export const MessageCard = ({firstName, lastName, content}) => {
    return<>
    
    <div className="border rounded container bg-light px-4 pb-2 pt-3">
            <div className="d-flex">
                
                <p className="mx-2">{firstName}</p>
                <p> {lastName}</p>
            </div>
            <div className="mx-2 d-flex">
                <p>{content}</p>
            </div>
        </div>
    
    </>
}