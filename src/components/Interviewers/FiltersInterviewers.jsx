export default function FiltersInterviewers() {
  return (
    <div className=" flex gap-5">
      {/* Industry filter */}

      <select className="select select-bordered ">
        <option disabled selected>
          Industry
        </option>
        <option>Option 1 </option>
        <option> Option 2</option>
      </select>

      {/* Limited filter */}

      <select className="select select-bordered ">
        <option disabled selected>
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  );
}
