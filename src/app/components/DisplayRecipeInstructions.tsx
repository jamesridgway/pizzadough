import { ReceiptInstructions } from "../recipe_generator";

type Props = {
  instructions: ReceiptInstructions | undefined
}

export default function DisplayRecipeInstructions(props: Props) {
  if (!props.instructions) {
    return <></>;
  }

  return (
    <div>
      <h2>Recipe &amp; Instructions</h2>
      <p>
        Ingredients:
      </p>
      <ul>
        <li>{props.instructions.flour}g Flour</li>
        <li>{props.instructions.water}ml Water</li>
        <li>{props.instructions.yeast}g Yeast</li>
        <li>{props.instructions.salt}g Salt</li>
      </ul>
    </div>
  );
}
