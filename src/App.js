import React from 'react'
import { ExportCSV } from './ExportCSV';

const App = () => {
  const fileName = 'TechnicalAdda'
  const viewers = [
    { id: 1, name: 'sakumar' },
    { id: 2, name: 'kumar' }
  ]

  return (
    <div>
      <ExportCSV csvData={viewers} fileName={fileName} />
    </div>
  )
}

export default App