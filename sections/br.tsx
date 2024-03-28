
interface Props {
  /**
  * @description The description of name.
  */
  name?: string;
}

export default function FancyGreenComponent({ name = "John Doe" }: Props) {
  return (<div class="bg-green-500 p-8 rounded-md shadow-md text-white">
    <h2 class="text-2xl font-semibold mb-4">Fancy Green Component</h2>
  
    <div class="space-y-4">
      <button class="bg-white text-green-500 font-semibold py-2 px-4 rounded-lg border-2 border-green-500">Click me</button>
  
      <input type="text" class="border-2 border-green-500 p-2 rounded-md" placeholder="Type something" />
  
      <div class="bg-white text-green-500 p-4 rounded-md shadow-md">
        {name}
      </div>
    </div>
  </div>)
}
