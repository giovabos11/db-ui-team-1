export const FoodDetails = () => {
    return <>
    
    <div className="container border rounded p-5">
        <div className=" p-5">
            <h3>Today's Macronutrient recap:</h3>
            <input type="text-area" />

            
            <hr />
            <h3>Log a new food</h3>

            <h4>Food Name</h4>
            <input type="text"/>

            <h4>Protein Amount (grams)</h4>
            <input type="text"/>

            <h4>Carbohydrate Amount (grams)</h4>
            <input type="text"/>

            <h4>Fat Amount (grams)</h4>
            <input type="text"/>

            

            
            
        </div>
        <button className="m-2 btn btn-primary">Submit Food</button>
        </div>
    
    </>
}