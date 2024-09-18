export default function InputField(props) {
  return (
    <input
      {...props}
      className="h-24 w-20 rounded-md focus:outline-none bg-base-200 text-center text-5xl focus:bg-accent focus:text-accent-content"
    />
  );
}
