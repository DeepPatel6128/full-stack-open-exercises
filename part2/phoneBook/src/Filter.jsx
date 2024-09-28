/* eslint-disable react/prop-types */


export default function Filter({filterName, filterNamesFunction}) {
  return (
    <form>
        <label htmlFor='filter'>Search - </label>
        <input type='text' id='filter' value={filterName} onChange={filterNamesFunction}/>
      </form>
  )
}
