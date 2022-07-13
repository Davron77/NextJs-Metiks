import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function ProductInput({ inputField, setInputField, index }) {
  const handleOnChange = (e) => {
    setCount(+e.target.value)
  }

  const inputMetr = (e) => {
    inputField[0].metr(1)
  }

  return (
    <div className="mt-4" id="product">
      <div className="relative flex gap-5 rounded-lg bg-[#F0F0F0] p-[18px]">
        <div className="grid">
          <label className="!mt-0 text-base font-normal">Выберите длину:</label>
          <input
            type="number"
            defaultValue={1}
            onChange={() => inputMetr()}
            name={`test[${index}].lastName`}
            min="1"
            max="5"
            className="mt-0 w-[168px] rounded-sm border-2 border-[#434343] bg-[#F0F0F0] p-1 text-center text-base text-black"
          />
        </div>
        <div>
          <label className="text-base font-normal">Количество листов:</label>
          <div className="mt-2 flex h-11 max-w-[184px] justify-between rounded-sm border-2 border-[#434343]">
            <button
              type="button"
              // onClick={() => (count == 0 ? null : setCount(count - 1))}
              onClick={() => console.log(inputField[index]?.count)}
              className="px-[18px]"
            >
              <AiOutlineMinus />
            </button>
            <input
              type="text"
              value={inputField[index]?.count}
              onChange={handleOnChange}
              className="mt-0 w-[60px] border-none bg-[#F0F0F0] text-center text-base text-black !outline-none"
            />
            <button
              type="button"
              // onClick={() => setCount(count + 1)}
              onClick={() => setInputField(inputField[index]?.count + 1)}
              className="px-[18px]"
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInput
