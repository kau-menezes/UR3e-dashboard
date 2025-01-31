interface IDataBallProps {
    title: string
    temperature: number
    positions: string
}

export default function TemperatureBall({ temperature, positions, title }: IDataBallProps) {
    return(
        <div className={`p-1 rounded-full aspect-square w-[90px] h-[90px] bg-white shadow-2xl absolute flex flex-col items-center justify-center pt-2 ${ positions }`}>
            <span className="text-sm text-[#727272] font-semibold text-center absolute top-5">{ title }</span>
            <h5 className="text-xl font-semibold text-main">{ temperature.toFixed(1) } °C</h5>
        </div>
    )
}