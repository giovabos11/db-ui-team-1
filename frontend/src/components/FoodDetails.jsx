export const FoodDetails = () => {
    return <>

        <div className="container border rounded p-3">
            <div className=" p-3">
                <div className="p-3">
                    <h3>Today's Macronutrient recap:</h3>
                    <input type="text-area" />
                </div>

                <hr />
                <h3>Log a new food</h3>
                <div className="p-3">
                    <h4>Food Name</h4>
                    <input type="text" />
                </div>

                <div className="p-3">
                    <h4>Protein Amount (grams)</h4>
                    <input type="text" />
                </div>
                <div className="p-3">
                    <h4>Carbohydrate Amount (grams)</h4>
                    <input type="text" />
                </div>
                <div className="p-3">
                    <h4>Fat Amount (grams)</h4>
                    <input type="text" />
                </div>




            </div>
            <button className="m-2 btn btn-primary">Submit Food</button>
        </div>

    </>
}