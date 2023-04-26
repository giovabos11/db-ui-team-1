import { useContext, useEffect, useState } from "react";
import { add_user_food, get_user_food } from "../../api/allApi";
import { AppContext } from "../global/AppContext";

export const FoodDetails = () => {
    const [foodName, setFoodName] = useState("");
    const [proteinAmount, setProteinAmount] = useState("");
    const [carbohidrateAmount, setCarbohidrateAmount] = useState("");
    const [fatAmount, setFatAmount] = useState("");
    const [totalProtein, setTotalProtein] = useState("");
    const [totalCarbs, setTotalCarbs] = useState("");
    const [totalFats, setTotalFats] = useState("");

    const appContext = useContext(AppContext);
    const handleSubmit = async (event) => {
        event.preventDefault();

        add_user_food(appContext.type, appContext.id, foodName, proteinAmount, carbohidrateAmount, fatAmount);

        const fetch_user_food = async () => {
            get_user_food(appContext.id).then(response => {
              setTotalProtein(response[0]["total_protein_amount"]);
              setTotalCarbs(response[0]["total_carbohidrate_amount"]);
              setTotalFats(response[0]["total_fat_amount"]);
          });
          }
      
          fetch_user_food();
    }
    

    useEffect(() => {
        const fetch_user_food = async () => {
          get_user_food(appContext.id).then(response => {
            setTotalProtein(response[0]["total_protein_amount"]);
            setTotalCarbs(response[0]["total_carbohidrate_amount"]);
            setTotalFats(response[0]["total_fat_amount"]);
        });
        }
    
        fetch_user_food();
    
      }, [])
    return <>


        <div className=" p-3">
            <div className="p-3">
                <h3>Today's Macronutrient recap:</h3>
                <h5>Proteins: {totalProtein ? totalProtein + 'g' : '0g'}</h5>
                <h5>Carbohydrates: {totalCarbs ? totalCarbs + 'g' : '0g'}</h5>
                <h5>Fats: {totalFats ? totalFats + 'g' : '0g'}</h5>
            </div>

            <hr />
            <h3>Log a new food</h3>
            <form onSubmit={handleSubmit}>
                <div className="p-3">
                    <label htmlFor="foodName">Food Name</label>
                    <input type="text" onChange={(e) => setFoodName(e.target.value)} />
                </div>

                <div className="p-3">
                    <label htmlFor="proteinAmount">Protein Amount (grams)</label>
                    <input type="text" onChange={(e) => setProteinAmount(e.target.value)} />
                </div>
                <div className="p-3">
                <label htmlFor="carbAmount">Carbohydrate Amount (grams)</label>
                    <input type="text" onChange={(e) => setCarbohidrateAmount(e.target.value)} />
                </div>
                <div className="p-3">
                <label htmlFor="fatAmount">Fat Amount (grams)</label>
                <input type="text" onChange={(e) => setFatAmount(e.target.value)} />
                </div>



                <button type="submit" className="m-2 btn btn-primary">Submit Food</button>
                </form >
        </div>
        
    

    </>
}