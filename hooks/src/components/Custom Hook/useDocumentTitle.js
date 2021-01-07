import React from 'react'

function useDocumentTitle(count) {
  React.useEffect(() => {
    document.title = `Count ${count}`
  }, [count])

}

export default useDocumentTitle
