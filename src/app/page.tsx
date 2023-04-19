
import '../styles/globals.css'

import MonetaryCard from '@/components/monetaryCard'
import Card from '@/components/card'
import Header from '@/components/header'
import Graph from '@/components/graph'

// import ResultCard from '@/components/resultCard'

export default function Home() {

  return (
    <body>
      <div>
        <Header/>
        <Card>
          <MonetaryCard/>
          {/* <ResultCard/> */}
        </Card>
      </div>
      <Graph/>
    </body>
  )
}
