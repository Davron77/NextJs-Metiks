import { Player } from '@lottiefiles/react-lottie-player'

function Empty() {
  return (
    <div className="col-span-3 mx-auto mt-[50px] w-full">
      <Player
        autoplay
        loop
        src="/empty.json"
        style={{ height: '300px', width: '300px' }}
      ></Player>
    </div>
  )
}

export default Empty
