import java from '../../public/java.png'
import python from '../../public/python.webp'
import mongoDB from '../../public/mongodb.jpg'
import express from '../../public/express.png'
import reactjs from '../../public/reactjs.png'
import nodejs from '../../public/node.png'

const PortFolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB"
    },
    {
      id: 2,
      logo: express,
      name: "Express"
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS"
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS"
    },
    {
      id: 5,
      logo: python,
      name: "Python"
    },
    {
      id: 6,
      logo: java,
      name: "Java"
    },
  ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio </h1>
        <span className="underline font-semibold">Featured Projects</span>

        <br />
        <br />

        {/* cards design */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {
            cardItem.map(({ id, logo, name }) => (
              <div
                key={id}
                className="md:w-[300px] md:h-[300px] border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              >
                <img
                  src={logo}
                  className="w-[100px] h-[100px] rounded-full border-2 object-contain mx-auto"
                  alt={name}
                />

                <div>
                  <div className="px-2 font-bold text-xl mb-2 text-center">
                    {name}
                  </div>

                  <p className="px-2 text-gray-700 text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </div>

                {/* Buttons */}
                <div className="px-2 py-4 flex justify-center gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                    Video
                  </button>

                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                    Source Code
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}
export default PortFolio;