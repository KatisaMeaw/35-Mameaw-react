import React from 'react'

const OwnerPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full items-center justify-center bg-amber-100">
        <h1 className="text-2xl font-bold p-4">35 Rungarun (Mameaw) - JSD11</h1>
        <div>
          <img className="h-100 w-100 object-cover border-2"
          src="https://img.myshopline.com/image/store/1651380017529/UD3_1296x.png?w=1200&h=1200">
          </img>
        </div>
        <div>
        <h3 className="text-red-600 p-2">
          This picture is represent my mood right now. I am an upset duck who wanted to fly.
        </h3>
        </div>
        <div>
          <h2 className="text-xl font-bold p-2">Upset duck!</h2>
          <p>I am so upset! some time! yeah! sometimes!</p>
        </div>
    </div>
  )
}

export default OwnerPage;