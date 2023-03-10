import Chart from 'react-apexcharts'
import { useGlobalStore } from '../store'

export const HelloWorld = () => {
  // Example how to use the global zustand store
  const { powerBiData } = useGlobalStore((state) => state)

  // View data from Power BI in the console
  console.log('powerBiData', powerBiData)

  const chartData = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  }

  return (
    <div>
      <h1>Hello Mate!</h1>
      <p>Nice stuff!!!</p>
      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="400"
          height="250"
        />
      </div>
    </div>
  )
}
