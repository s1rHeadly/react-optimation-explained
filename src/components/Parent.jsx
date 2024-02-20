
import { useState, useCallback} from "react";



import TitleComponent from "./Title";
import DiplayComponent from "./Display";
import ButtonComponent from "./Button";



export const Parent = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(30);


  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);

  return (
    <div>
      <TitleComponent />
      <DiplayComponent text="age" displayvalue={age} />
      <ButtonComponent handleClick={incrementAge}>Update Age</ButtonComponent>
      <DiplayComponent text="salary" displayvalue={salary} />
      <ButtonComponent handleClick={incrementSalary}>Update Salary</ButtonComponent>
    </div>
  )
}
