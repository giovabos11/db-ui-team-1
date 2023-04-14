import { useState } from "react";
import { ExerciseCard } from "./ExerciseCard";
import { Cart } from "./Cart";
import { Header } from "../GlobalComponents/Header"
export const ExerciseGallery = ({ setInExercise, setInWorkout, inExercise, inWorkout }) => {
  const [cartItems, setCartItems] = useState([]);


  return <>
    <div className="" style={{ backgroundColor: "#b7ccdf", minHeight: "100vh" }}>
      <div className="py-3">
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
          inExercise={inExercise}
          inWorkout={inWorkout}
        />
      </div>
      <div className="">
        <h1 className="text-center">Exercise Gallery</h1>
        <div className="m-3 text-center">
          <button className="btn text-white m-2" style={{ backgroundColor: "#A8BA9A", outlineColor: "#A8BA9A" }}
            onClick={() => {
              setInWorkout(true);
              setInExercise(false);
            }}

          >Workouts</button>
          <button className="btn text-white m-2" style={{ backgroundColor: "#A8BA9A", outlineColor: "#A8BA9A" }}>Exercises</button>
        </div>
        <div className="container">
          <p className="text-center">Chest</p>
          <hr></hr>

          <div className=" workout-grid2">
            <ExerciseCard name="Bench Press" id="1" img="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"
              cartItems={cartItems}
              setCartItems={setCartItems} />
            <ExerciseCard name="Leg Press" id="2" img="https://www.shutterstock.com/image-illustration/inclined-leg-press-3d-illustration-260nw-434632384.jpg"
              cartItems={cartItems}
              setCartItems={setCartItems} />
            <ExerciseCard name="Chest Press" id="3" img="https://www.inspireusafoundation.org/wp-content/uploads/2022/05/chest-press-vs-bench-press-1024x576.jpg"
              cartItems={cartItems}
              setCartItems={setCartItems} />
            <ExerciseCard name="Lat Pulldown" id="4" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
              cartItems={cartItems}
              setCartItems={setCartItems} />
            <ExerciseCard name="Something XYZ" id="5" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
              cartItems={cartItems}
              setCartItems={setCartItems} />
            <ExerciseCard name="Random" id="6" img="https://www.shutterstock.com/image-illustration/reverse-grip-lat-pulldown-3d-260nw-430936258.jpg"
              cartItems={cartItems}
              setCartItems={setCartItems} />
          </div>
          <p className="text-center">Legs</p>
          <hr></hr>
          <div className=" workout-grid2 chest">
          <ExerciseCard name="Bench Press" id="7" img="https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg"
              cartItems={cartItems}
              setCartItems={setCartItems} />

          </div>
        </div>

      </div>

    </div>
  </>
};
